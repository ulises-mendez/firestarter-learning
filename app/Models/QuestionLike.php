<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionLike extends Model
{
    use HasFactory;

    protected $fillable= [
        'user_id',
        'question_id',
    ];

    public function user(){
        return $this->hasOne(User::class);
    }

    public function question(){
        return $this->hasOne(Question::class);
    }
}
