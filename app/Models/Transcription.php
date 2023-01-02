<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transcription extends Model
{
    use HasFactory;

    protected $fillable = [
        'filename',
        'path',
        'extension',
        'size'
    ];

    public function course()
    {
        return $this->hasMany(Course::class);
    }
}
