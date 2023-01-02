<?php

namespace App\Models;

use Auth;
use Illuminate\Database\Eloquent\Factories\HasFactory;



class Lesson extends Model
{
    use HasFactory;

    protected $fillable=[
        'course_id',
        'chapter_id',
        'order',
        'title',
        'slug',
        'video',
        'video_id',
        'transcription_id',
        'premium',
        'time'
    ];

    public function chapter(){
        return $this->belongsTo(Chapter::class);
    }

    public function course(){
        return $this->belongsTo(Course::class);
    }

    public function questions(){
        return $this->hasMany(Question::class);
    }

    public function notes(){
        return $this->hasMany(Note::class);
    }

    public function user_notes($user){
        return $this->notes()->where('user_id', $user);
    }

    public function user_status($user){
        return LessonPlay::where([
            ['completed', '!=' , null],
            ['user_id', $user],
            ['lesson_id', $this->id]
            ])->count();
    }

    public function video(){
        return $this->hasOne(VideoLesson::class,'id', 'video_id');
    }

    public function transcription(){
        return $this->hasOne(Transcription::class,'id', 'transcription_id');
    }

    public function played()
    {
        return $this->hasMany(LessonPlay::class);
    }

    public function user_played()
    {
        $user = Auth::user();
        return $this->played()->where('user_id', $user->id);
    }

    public function lesson_play(){
        return $this->hasMany(LessonPlay::class);
    }


    /*
    public function user_history($user){
        return $this->history()->hasOne(LearningHistory::class);
    }
    */
}
