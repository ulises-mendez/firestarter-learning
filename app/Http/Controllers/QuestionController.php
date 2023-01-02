<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Requests\StoreQuestionRequest;
use App\Http\Requests\UpdateQuestionRequest;
use App\Http\Requests\LikeQuestionRequest;
use App\Models\Question;
use App\Models\QuestionLike;
use App\Http\Resources\QuestionResource;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreQuestionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreQuestionRequest $request)
    {
        $user = Auth::user();

        $question = Question::create([
            'user_id' => $user->id,
            'course_id' => $request->course_id,
            'chapter_id' => $request->chapter_id,
            'lesson_id' => $request->lesson_id,
            'content' => $request->content,
            'time' => $request->time,
            'reply_to' => $request->reply_to
        ]);

        return response()->json([
            'message' => 'Sucessfully stored',
            'quote' => new QuestionResource($question)
        ]);
    }

    public function answer(StoreQuestionRequest $request)
    {
        $user = Auth::user();

        $question = Question::create([
            'user_id' => $user->id,
            'course_id' => $request->course_id,
            'chapter_id' => $request->chapter_id,
            'lesson_id' => $request->lesson_id,
            'content' => $request->content,
            'time' => $request->time,
            'reply_to' => $request->reply_to
        ]);

        return response()->json([
            'message' => 'Sucessfully stored',
            //'quote' => new QuestionResource($question),
            'quote' => new QuestionResource($question->parent)
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function show(Question $question)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function like(LikeQuestionRequest $request)
    {   
        $question_id = $request->question; 
        $user = Auth::user();

        $like = QuestionLike::where([
            ['user_id', '=', $user->id],
            ['question_id', $question_id]
        ])->first();

        if($like == null) {
            QuestionLike::create([
                'user_id' => $user->id,
                'question_id' => $question_id
            ]);
            return response()->json([
                'like' => true
            ]);
        }else{
            $like->delete();
            return response()->json(['like' => false]);
        }

        return response()->json(['like' => $like]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateQuestionRequest  $request
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateQuestionRequest $request, Question $question)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function destroy(Question $question)
    {
        //
    }
}
