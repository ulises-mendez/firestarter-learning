<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCourseInstructorRequest;
use App\Models\CourseInstructor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class CourseInstructorController extends Controller
{
    public function __invoke(StoreCourseInstructorRequest $request)
    {
        $instructor = CourseInstructor::firstOrCreate([
            'course_id' => $request->course,
            'user_id' => $request->instructor,
        ]);

        if ($request->expectsJson())
        {
            return response()->json([ 'instructor' => [
                'avatar' => $instructor->user->avatar ? $instructor->user->avatar->path : '/img/empty/profile.png',
                'email' => $instructor->user->email,
                'id' => $instructor->id,
                'name' => $instructor->user->first_name . ' ' . $instructor->user->last_name
            ]]);
        }

        return Redirect::back()->with('success', 'Instructor Added Successfully');
    }

    public function destroy(CourseInstructor $course_instructor)
    {
        $course_instructor->delete();

        return Redirect::back()->with('success', 'Instructor Deleted Successfully');
    }
}
