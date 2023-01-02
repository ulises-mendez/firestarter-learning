<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseCollection extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_collection_id',
        'course_id',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class, 'course_id');
    }

    public function thumbnail()
    {
        return 'thumb';
    }

    public function user_collection()
    {
        return $this->belongsTo(UserCollection::class);
    }
}
