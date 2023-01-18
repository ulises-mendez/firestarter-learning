<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Requests\StoreQuizRequest;
use App\Http\Requests\UpdateQuizRequest;
use App\Http\Resources\CourseNotesResource;
use App\Http\Resources\CourseSelectCollection;
use App\Http\Resources\LessonCourseResource;
use App\Http\Resources\QuizCollection;
use App\Http\Resources\QuizEditResource;
use App\Http\Resources\QuizQuestionResource;
use App\Http\Resources\QuizResource;
use App\Http\Resources\RelatedCoursesCollection;
use App\Http\Resources\UserQuizQuestionResource;
use App\Models\Course;
use App\Models\Quiz;
use App\Models\QuizQuestion;
use App\Models\QuizQuestionOption;
use App\Models\UserQuiz;
use App\Models\UserQuizQuestion;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request as RequestFilter;
use Illuminate\Support\Str;
use Inertia\Inertia;


class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $quizzes = Quiz::orderBy('id', 'desc')
                    ->filter(RequestFilter::only('search'))
                    ->paginate(15)
                    ->appends(RequestFilter::all())
                    ;
        return Inertia::render(
            'Admin/Quizzes/Index',[
                'quizzes' => new QuizCollection($quizzes),
                'filters' => RequestFilter::all('search', 'status', 'level', 'highlight'),
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $courses = Course::all();
        return Inertia::render('Admin/Quizzes/Create',[
            'courses' => new CourseSelectCollection($courses),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreQuizRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreQuizRequest $request)
    {
        $quiz = Quiz::create([
            'course_id' => $request->course,
            'uuid' => Str::uuid(),
            'chapter_id' => $request->chapter
        ]);

        $questions = $request->newQuiz;

        foreach ($questions as $question) {         
            $quiz_question = QuizQuestion::create([
                'quiz_id' => $quiz->id,
                'text' => $question['text'],
                'section_id' => $quiz->chapter_id
            ]);

            $options = $question['options'];
            foreach ($options as $option) {
                QuizQuestionOption::create([
                    'quiz_id' => $quiz->id,
                    'quiz_question_id' => $quiz_question->id,
                    'text' => $option['text'],
                    'message' => $option['message'],
                    'value' => $option['value']
                ]);
            }
        }

        if($request->has('source'))
        {
            return Redirect::route('quiz.edit', $quiz->id)->with('success','Quiz Added Successfully');
        }

        return Redirect::back()->with('success','Quiz Added Successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Quiz  $quiz
     * @return \Illuminate\Http\Response
     */
    public function show($course_slug,$quiz)
    {
        $user = Auth::user();
        $course = Course::where('slug','=', $course_slug)->firstOrFail();
        $finished = null;
        $quiz_info = Quiz::find($quiz);
        $user_quiz = UserQuiz::where([
            ['user_id', $user->id],
            ['quiz_id', $quiz_info->id]
        ])->first();
        $quiz_questions = $quiz_info->questions->count();
        $question = $quiz_info->questions[0];
        $question_id = 0;
        if($user_quiz == null)
        {
            $question = $quiz_info->questions[0];
        }
        if($user_quiz !== null)
        {
            $question_id = $user_quiz->question;
            $question = $quiz_info->questions[$question_id];
            $finished = $user_quiz->finished;
        }
        
        
        if($finished)
        {
        $questions = $quiz_info->questions;
        $user_questions = [];
        
        foreach($questions as $question)
        {
            $user_question = UserQuizQuestion::where([
                ['user_id', $user->id],
                ['quiz_question_id', $question->id]
            ])
            ->first();
            
            $user_questions[] = new UserQuizQuestionResource($user_question);
        }
        
        // return Inertia::render('Quizzes/Show',[
        return Inertia::render('Quizzes/Finished',[
            'course' => new LessonCourseResource($course),
            'csrf' => csrf_token(),
            'quiz' => new QuizResource($quiz_info),
            'question' => new QuizQuestionResource($question),
            'questions' => $quiz_questions,
            'quiz_question' => $question_id,
            'quiz_questions' => $quiz_questions,
            'user_quiz' => $user_quiz,
            'user_questions' => $user_questions
        ]);
        }
        return Inertia::render('Quizzes/Show',[
                'course' => new LessonCourseResource($course),
                'csrf' => csrf_token(),
                'quiz' => new QuizResource($quiz_info),
                'question' => new QuizQuestionResource($question),
                'questions' => $quiz_questions,
                'quiz_question' => $question_id,
                'quiz_questions' => $quiz_questions,
                'user_quiz' => $user_quiz,
            ]);
    }


    public function quiz_answer($course_slug,$quiz,Request $request)
    {
        $user = Auth::user();
        $course = Course::where('slug','=', $course_slug)->firstOrFail();
        $question_id = $request->question_id;
        $quiz_question = $request->quiz_question;
        
        //$quiz = Quiz::find($request->quiz);
        $option_id = $request->option;
        $option = QuizQuestionOption::find($option_id);
        $quiz_info = Quiz::find($quiz);
        $quiz_questions = $quiz_info->questions->count();
        $question = $quiz_info->questions[$quiz_question];
        //$questions = $quiz->questions->count();
        //$next = $quiz->questions->toArray();
        //$search = array_search(1, array_column($next, 'id'));
        //dd($next[1]);
        $next = $quiz_question + 1;

        
        $user_quiz = UserQuiz::updateOrCreate(
            [
                'user_id' => $user->id,
                'quiz_id' => $quiz_info->id
            ],
            [
                'question' => $next >= $quiz_questions - 1 ? $quiz_questions - 1 : $next,
                'finished' => $next >= $quiz_questions ? now() : null,
            ]
        );

        $user_quiz_question = UserQuizQuestion::updateOrCreate(
            [
                'user_id' => $user->id,
                'quiz_question_id' => $question_id
            ],
            [
                'quiz_question_option_id' => $option_id
            ]
        );

        

        

        return Inertia::render('Quizzes/Response',[
            'course' => new LessonCourseResource($course),
            'csrf' => csrf_token(),
            'question' => new QuizQuestionResource($question),
            'questions' => $quiz_questions,
            'quiz' => new QuizResource($quiz_info),
            'quiz_question' => $quiz_question,
            'acknowledged' => [
                'value' => $option->value,
                'id' => $option->id,
                'message' => $option->message,
            ]
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Quiz  $quiz
     * @return \Illuminate\Http\Response
     */
    public function edit(Quiz $quiz)
    {
        try{
        return Inertia::render('Admin/Quizzes/Edit',[
            'quiz' => new QuizEditResource($quiz),
            'questions' => $quiz->questions
        ]);
        }
        catch(ModelNotFoundException $err){
            Redirect::route('quizzes.admin');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateQuizRequest  $request
     * @param  \App\Models\Quiz  $quiz
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateQuizRequest $request, Quiz $quiz)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Quiz  $quiz
     * @return \Illuminate\Http\Response
     */
    public function destroy(Quiz $quiz)
    {
        $quiz->delete();

        return Redirect::back()->with('success', 'Quiz deleted successfully');
    }

    public function retake(Request $request)
    {
        //return dd($request);
        $user = Auth::user();

        $user_quiz = UserQuiz::where([
            ['user_id' , $user->id],
            ['quiz_id' , $request->quiz]
            ])->first();
        
        $user_quiz->delete();

        return Redirect::back();
    }
}
