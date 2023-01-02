<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'title'
    ];

    public function topics(){
        return $this->hasMany(Topic::class);
    }
}
