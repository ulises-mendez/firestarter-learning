<?php

namespace App\Models;

use Auth;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable=[
        'content',
        'course_id',
        'rate',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function likes(){
        return $this->hasMany(LikeReview::class);
    }

    public function like()
    {
        $user = Auth::user();
        if($user)
        {
            return $this->likes()->where('user_id', $user->id)->count();
        }

        return null;
    }
}
