<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;


class Chapter extends Model
{
    use HasFactory;

    protected $fillable=[
        'course_id',
        'title',
        'order',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function lessons()
    {
        return $this->hasMany(Lesson::class);
    }

    public function lessons_count()
    {
        return $this->lessons()->count();
    }

    public function notes()
    {
        return $this->hasMany(Note::class);
    }

    public function videos()
    {
        return $this->lessons()->with('video');
    }

    public function duration()
    {
        $time = Lesson::where('chapter_id', $this->id)->sum('time');
        return $time;
    }

    public function user_notes($user){
        return $this->notes()->where('user_id', $user);
    }

    public function quiz(){
        return $this->hasOne(Quiz::class);
    }
}
