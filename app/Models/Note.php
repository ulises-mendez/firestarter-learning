<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'chapter_id',
        'lesson_id',
        'user_id',
        'content',
        'time',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function lesson(){
        return $this->belongsTo(Lesson::class);
    }

    public function course(){
        return $this->belongsTo(Course::class);
    }
}
