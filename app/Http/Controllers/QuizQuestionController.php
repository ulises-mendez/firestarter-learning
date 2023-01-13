<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreQuizQuestionRequest;
use App\Http\Requests\UpdateQuizQuestionRequest;
use App\Models\Quiz;
use App\Models\QuizQuestion;
use App\Models\QuizQuestionOption;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class QuizQuestionController extends Controller
{
    public function store(Quiz $quiz,StoreQuizQuestionRequest $request)
    {
        //dd($request);
        $quiz_question = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'section_id' => $quiz->chapter_id,
            'text' => $request->text,
        ]);

        $options = $request->options;

        foreach ($options as $option)
        {
            QuizQuestionOption::create([
                'quiz_id' => $quiz->id,
                'quiz_question_id' => $quiz_question->id,
                'text' => $option['text'],
                'message' => $option['message'],
                'value' => $option['value']
            ]);
        }
        
        return Redirect::back()->with('success', 'Question added successfully');
    }

    public function update(QuizQuestion $quiz_question,UpdateQuizQuestionRequest $request)
    {
        $quiz_question->update([
            'text' => $request->text,
        ]);

        $options = $request->options;

        foreach ($options as $option)
        {
            if(array_key_exists('id', $option))
            {
                $quiz_question_option = QuizQuestionOption::find($option['id']);
                $quiz_question_option->update([
                    'text' => $option['text'],
                    'message' => $option['message'],
                    'value' => $option['value']
                ]);
            }
            if(!array_key_exists('id', $option))
            {
                QuizQuestionOption::create([
                    'quiz_id' => $quiz_question->quiz_id,
                    'quiz_question_id' => $quiz_question->id,
                    'text' => $option['text'],
                    'message' => $option['message'],
                    'value' => $option['value']
                ]);
            }
            
        }
        
        return Redirect::back()->with('success', 'Question has been updated successfully');
    }

    public function destroy(QuizQuestion $quiz_question)
    {
        $quiz_question->delete();

        return Redirect::back()->with('success', 'Question deleted successfully');
    }
}
