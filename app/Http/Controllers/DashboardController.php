<?php

namespace App\Http\Controllers;

use App\Http\Resources\ActiveCourseCollection;
use App\Http\Resources\UserCareerGoalResource;
use App\Http\Resources\CourseCollection;
use App\Http\Resources\UserTopicsCollection;
use App\Models\ActiveUserCourse;
use App\Models\Course;
use App\Models\UserCompletedCourse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $user = Auth::user();
        $highlighted = Course::where('highlight', true)
            ->orderBy('id', 'desc')
            ->get()
            ->take(5);
        $active_courses = ActiveUserCourse::where('user_id', $user->id)->get();
        $completed_courses = UserCompletedCourse::where('user_id', $user->id)->get();
        $topics = $user->topics;

        return Inertia::render('Dashboard', [
            'active_courses' => new ActiveCourseCollection($active_courses),
            'completed_courses' => new ActiveCourseCollection($completed_courses),
            'name' => $user->name(),
            'id' => $user->id,
            'highlighted' => new CourseCollection($highlighted),
            'personal_title' => $user->profile->headline,
            'goal' => $user->goal !== null ? new UserCareerGoalResource($user->goal) : null,
            'subscription' => $user->subscribed(1),
            'topics' => new UserTopicsCollection($topics)
        ]);
    }
}
