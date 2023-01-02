<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VideoLesson extends Model
{
    use HasFactory;

    protected $fillable=[
        'lesson_id',
        'original_name',
        'extension',
        'file_name',
        'path',
        'size',
        'time',
        'created_by',
    ];

    public function chapter(){
        return $this->belongsTo(Chapter::class, 'video_id');
    }
}
