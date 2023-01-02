<?php

namespace App\Models;

use Auth;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'course_id',
        'chapter_id',
        'lesson_id',
        'content',
        'time',
        'likes',
        'reply_to',
    ];

    public function lesson(){
        return $this->belongsTo(Lesson::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function replies(){
        return $this->hasMany(Question::class, 'reply_to');
    }

    public function replies_count(){
        return $this->hasMany(Question::class, 'reply_to')->count();
    }

    public function parent(){
        return $this->belongsTo(Question::class, 'reply_to');
    }

    public function likes(){
        return $this->hasMany(QuestionLike::class);
    }

    public function likes_count(){
        return $this->likes()->count();
    }

    public function user_like(){
        $user = Auth::user();
        return $this->likes()->where('user_id', $user->id)->count();
    }
}
