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
        CourseInstructor::firstOrCreate([
            'course_id' => $request->course,
            'user_id' => $request->instructor,
        ]);

        if ($request->expectsJson())
        {
            return response()->json([ 'success' => 'Instructor has been created']);
        }

        return Redirect::back()->with('success', 'Instructor Added Successfully');
    }

    public function destroy(CourseInstructor $course_instructor)
    {
        $course_instructor->delete();

        return Redirect::back()->with('success', 'Instructor Deleted Successfully');
    }
}
