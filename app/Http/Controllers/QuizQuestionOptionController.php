<?php

namespace App\Http\Controllers;

use App\Models\QuizQuestionOption;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class QuizQuestionOptionController extends Controller
{
    public function __invoke(QuizQuestionOption $quiz_question_option)
    {
        $quiz_question_option->delete();

        return Redirect::back()->with('success', 'Option deleted successfully');
    }
}
