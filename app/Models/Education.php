<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Education extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable =[
        'user_id',
        'level',
        'field',
        'college',
        'city',
        'from_month',
        'from_year',
        'to_month',
        'to_year',
        'currently'
    ];
}
