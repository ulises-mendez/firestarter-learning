<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseSkill extends Model
{
    use HasFactory;

    protected $fillable= [
        'skill_id',
        'course_id',
    ];

    public function skill(){
        return $this->belongsTo(Skill::class);
    }

    public function course(){
        return $this->hasOne(Course::class);
    }
}
