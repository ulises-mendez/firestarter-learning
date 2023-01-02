<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'first_name',
        'description',
        'heading',
        'last_name',
        'password',
        'country',
        'street',
        'city',
        'postal_code',
        'level_education',
        'field',
        'school_name',
        'school_country',
        'school_city',
        'topics',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
