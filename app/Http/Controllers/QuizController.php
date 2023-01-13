<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreQuizRequest;
use App\Http\Requests\UpdateQuizRequest;
use App\Http\Resources\CourseSelectCollection;
use App\Http\Resources\QuizCollection;
use App\Http\Resources\QuizResource;
use App\Models\Course;
use App\Models\Quiz;
use App\Models\QuizQuestion;
use App\Models\QuizQuestionOption;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request as RequestFilter;
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
    public function show(Quiz $quiz)
    {
        //
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
            'quiz' => new QuizResource($quiz),
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
}
