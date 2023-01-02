<?php

namespace App\Models;

use Auth;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCollection extends Model
{
    use HasFactory;

    protected $fillable=[
        'user_id',
        'title',
        'description',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function course_collections()
    {
        return $this->hasMany(CourseCollection::class, 'user_collection_id');
    }

    public function thumbnail()
    {

        $first = $this->course_collections()->first();

        if ($first == null) {
            return '/img/empty/collection.jpg';
        }

        if ($first !== null) {
            return $first->course->thumbnail->path;
        }
        

    }

    public function course_status($course)
    {
        $user = Auth::user();
        return $this->course_collections()->where('course_id', $course)
            ->count();
    }
}
