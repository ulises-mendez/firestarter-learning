<?php

namespace App\Models;

use Auth;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Laravel\Cashier\Billable;

use App\Models\Profile;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles, Billable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'otp',
        'otp_attempts',
        'email_verified_at'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function avatar()
    {
        return $this->hasOne(UserAvatar::class);
    }

    public function collections()
    {
        return $this->hasMany(UserCollection::class, 'user_id')->orderBy('updated_at', 'desc');
    }

    public function completed_courses()
    {
        return $this->hasMany(UserCompletedCourse::class);
    }

    public function course_notes($course)
    {
        return $this->notes()->where('course_id', '=', $course);
    }

    public function saves()
    {
        return $this->hasMany(CourseSave::class);
    }

    public function active_courses()
    {
        return $this->hasMany(ActiveUserCourse::class);
    }

    public function education()
    {
        return $this->hasMany(Education::class);
    }

    public function goal()
    {
        return $this->hasOne(UserCareerGoal::class);
    }

    public function history(){
        return $this->hasMany(LearningHistory::class);
    }

    public function hasProfile()
    {
        return $this->profile()->exists();
    }

    public function name()
    {
        if($this->hasProfile()){
        $first_name = $this->profile->first_name;
        $last_name = $this->profile->last_name;
        return $first_name . ' ' . $last_name;
        }else{
            return null;
        }
        
    }

    public function notes()
    {
        return $this->hasMany(Note::class);
    }

    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
    
    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('email', 'like', '%'.$search.'%')
                ->orWhereHas('profile', function ($query) use ($search) {
                    $query->where('first_name', 'like', '%'.$search.'%');
                });
            });
        })->when($filters['role'] ?? null, function ($query, $role) {
            $query->role($role);
        })->when($filters['trashed'] ?? null, function ($query, $trashed) {
            if ($trashed === 'with') {
                $query->withTrashed();
            } elseif ($trashed === 'only') {
                $query->onlyTrashed();
            }
        });
    }

    public function skills()
    {
        return $this->hasMany(UserSkill::class);
    }

    public function topics()
    {
        return $this->hasMany(UserTopic::class);
    }

    public function topics_ids()
    {
        return $this->hasMany(UserTopic::class);
    }

    public function works()
    {
        return $this->hasMany(WorkExperience::class);
    }
    
}
