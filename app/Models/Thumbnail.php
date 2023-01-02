<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Thumbnail extends Model
{
    use HasFactory;

    protected $fillable=[
        'course_id',
        'original_name',
        'file_name',
        'path',
        'size',
        'created_by'
    ];
}
