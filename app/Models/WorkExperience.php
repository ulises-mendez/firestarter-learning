<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class WorkExperience extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'title',
        'company_name',
        'country',
        'city',
        'from_month',
        'from_year',
        'currently',
        'to_month',
        'to_year',
        'description'
    ];
}
