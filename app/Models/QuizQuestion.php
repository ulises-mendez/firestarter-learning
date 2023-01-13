<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizQuestion extends Model
{
    use HasFactory;

    protected $fillable= [
        'quiz_id',
        'section_id',
        'text'
    ];

    public function options()
    {
        return $this->hasMany(QuizQuestionOption::class);
    }
}
