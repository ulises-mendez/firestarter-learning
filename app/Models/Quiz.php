<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'chapter_id',
        'uuid',
    ];

    public function chapter()
    {
        return $this->belongsTo(Chapter::class);
    }

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function questions()
    {
        return $this->hasMany(QuizQuestion::class);
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            //$query->where('title', 'like', '%'.$search.'%');
            $query->whereHas('course', function ($q) use ($search) {
                $q->where('title', 'like', '%'.$search.'%');
            });
        });
        /*
        ->when($filters['status'] ?? null, function ($query, $status) {
            $query->where('status', $status);
        });
        */
    }

    /*
    public function getRouteKeyName()
    {
        return 'uuid';
    }
    */
    public function userQuiz()
    {
        return $this->hasMany(UserQuiz::class);
    }
}
