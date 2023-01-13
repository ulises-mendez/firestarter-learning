<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizQuestionOption extends Model
{
    use HasFactory;

    protected $fillable = [
        'quiz_id',
        'quiz_question_id',
        'text',
        'message',
        'value'
    ];
}
