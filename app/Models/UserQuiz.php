<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserQuiz extends Model
{
    use HasFactory;

    protected $fillable=[
        'user_id',
        'quiz_id',
        'question',
        'finished',
        'attempts',
        'approved',
    ];

    public function quiz()
    {
        return $this->belongsTo(User::class);
    }


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
