<?php

namespace App\Http\Controllers;

use App\Http\Resources\CompletedCoursesCollection;
use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
class UserCompletedCourseController extends Controller
{
    public function __invoke()
    {
        $user = Auth::user();
        return Inertia::render('Profile/History',[
            'active_courses' => $user->active_courses->count(),
            'collections' => $user->collections->count(),
            'completed_courses' => new CompletedCoursesCollection($user->completed_courses),
            'save_count' =>  $user->saves->count(),
        ]);
    }
}
