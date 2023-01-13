<?php

namespace App\Models;


use Auth;
use App\Models\User;
use App\Models\Chapter;
use App\Models\Lesson;
use App\Models\Review;
use App\Models\Question;
use App\Models\VideoLesson;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;
class Course extends Model
{
    use HasFactory;


    protected static function boot()
    {
        parent::boot();
        static::created(function ($course) {
            $course->slug = $course->generateSlug($course->title);
            $course->save();
        });
    }
    
    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function category(){
        return $this->hasOne(Category::class,'id', 'category_id');
    }
    
    public function chapters(){
        return $this->hasMany(Chapter::class);
    }

    public function chapters_count(){
        return $this->chapters()->count();
    }

    public function instructors()
    {
        return $this->hasMany(CourseInstructor::class);
    }

    public function first_lesson() {
        return $this->lessons()->first();
    }

    public function lessons(){
        return $this->hasMany(Lesson::class);
    }

    public function lessons_count(){
        return $this->lessons()->count();
    }

    public function lesson_chapters(){
        return $this->morphToMany(Lesson::class, 'taggable');
    }

    public function reviews(){
        return $this->hasMany(Review::class);
    }

    public function notes(){
        return $this->hasMany(Note::class);
    }

    public function time(){
        return $this->lessons->sum('time');
    }

    public function user_notes($user){
        return $this->notes()->where('user_id', $user);
    }

    public function user_notes_count($user){
        return $this->notes()->where('user_id', $user)->count();
    }

    public function questions(){
        return $this->hasMany(Question::class);
    }

    public function likes(){
        return $this->hasMany(LikeCourse::class);
    }

    public function likes_count(){
        return $this->likes()->count();
    }

    public function saves(){
        return $this->hasMany(CourseSave::class);
    }

    public function saves_count(){
        return $this->saves()->count();
    }

    public function skills(){
        return $this->hasMany(CourseSkill::class);
    }

    public function thumbnail(){
        return $this->hasOne(Thumbnail::class,'id', 'thumbnail_id');
    }


    public function quizzes()
    {
        return $this->hasMany(Quiz::class);
    }

    public function topics(){
        return $this->hasMany(CourseTopic::class);
    }

    public function time_played()
    {
        return $this->hasManyThrough(LessonPlay::class, Lesson::class);
    }

    public function user_played()
    {
        $user = Auth::user();

        $uncompleted = $this->time_played()->where([['user_id', '=', $user->id], ['completed', '=', null]])->sum('lesson_plays.time');

        $completed = $this->time_played()->where([['user_id', '=', $user->id], ['completed', '!=', null]])->sum('lesson_plays.fulltime');
        return $uncompleted + $completed;
    }

    public function user_like(){
        $user = Auth::user();
        return $this->likes()->where('user_id', $user->id)->count();
    }

    public function user_save(){
        $user = Auth::user();
        return $this->saves()->where('user_id', $user->id)->count();
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where('title', 'like', '%'.$search.'%');
        })
        ->when($filters['status'] ?? null, function ($query, $status) {
            $query->where('status', $status);
        })
        ->when($filters['level'] ?? null, function ($query, $level) {
            $query->where('level', $level);
        })
        ->when($filters['highlight'] ?? null, function ($query, $highlight) {
            $query->where('highlight', true);
        });
    }

    private function generateSlug($title)
    {
        if (static::whereSlug($slug = Str::slug($title))->exists()) {
            $max = static::whereTitle($title)->latest('id')->skip(1)->value('slug');
            if (isset($max[-1]) && is_numeric($max[-1])) {
                return preg_replace_callback('/(\d+)$/', function($mathces) {
                    return $mathces[1] + 1;
                }, $max);
            }
            return "{$slug}-2";
        }
        return $slug;
    } 

}
