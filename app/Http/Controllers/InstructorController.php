<?php

namespace App\Http\Controllers;

use App\Http\Resources\CourseIntrusctorCollection;
use App\Http\Resources\InstructorResource;
use App\Models\CourseInstructor;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InstructorController extends Controller
{
    public function __invoke($id)
    {
        $user= User::findOrFail($id);
        $courses = CourseInstructor::where('user_id',$user->id)->whereHas('course',function($q){
            $q->where('released', '!=', null);
        })->get();

        /*
        return response()->json([
            'instructor' => new InstructorResource($user),
            'courses' => new CourseIntrusctorCollection($courses),
        ]);
        */

        return Inertia::render('Instructors/Single', [
            'instructor' => new InstructorResource($user),
            'courses' => new CourseIntrusctorCollection($courses),
        ]);
    }
}
