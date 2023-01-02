<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseTopic extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'topic_id',
    ];

    public function topic(){
        return $this->belongsTo(Topic::class);
    }

    public function course(){
        return $this->belongsTo(Course::class);
    }
}
