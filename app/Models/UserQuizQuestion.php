<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserQuizQuestion extends Model
{
    use HasFactory;

    protected $fillable=[
        'user_id',
        'quiz_question_id',
        'quiz_question_option_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function question()
    {
        return $this->hasOne(QuizQuestion::class, 'id', 'quiz_question_id');
    }

    public function option()
    {
        return $this->hasOne(QuizQuestionOption::class, 'id', 'quiz_question_option_id');
    }
}
