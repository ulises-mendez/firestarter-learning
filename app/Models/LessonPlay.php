<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LessonPlay extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'user_id',
        'fulltime',
        'lesson_id',
        'time',
        'played',
        'completed'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }
}