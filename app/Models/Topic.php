<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Topic extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'title',
        'description'
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function courses(){
        return $this->hasMany(CourseTopic::class);
    }

    public function trend(){
        return $this->courses->where('highlight', true)->get();
    }

}
