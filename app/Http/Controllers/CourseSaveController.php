<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Resources\CourseSaveCollection;
use App\Http\Requests\StoreCourseSavedRequest;
use App\Models\Course;
use App\Models\CourseSave;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CourseSaveController extends Controller
{
    public function destroy(CourseSave $saved)
    {
        $user = Auth::user();

        $saved->delete();

        return response()->json([
            'message' => 'Course deleted successfully'
        ]);
    }
    
    public function store(StoreCourseSavedRequest $request)
    {
        $user = Auth::user();
        $course = $request->course_id;

        $saved = CourseSave::where([
            ['user_id', '=', $user->id],
            ['course_id', $course]
        ])->first();

        if($saved == null) {
            CourseSave::create([
                'user_id' => $user->id,
                'course_id' => $course
            ]);

            $courseItem = Course::find($course);
            if($request->expectsJson())
            {
                return response()->json([
                    'save' => true,
                    'saves' => $courseItem->saves_count()
                ]);
            }
            
            return Redirect::back();
        }else{
            $saved->delete();
            $course = Course::find($course);
            if($request->expectsJson())
            {
            return response()->json([
                'save' => false,
                'saves' => $course->saves_count()
            ]);
            }
            return Redirect::back();
        }

        return Redirect::back();
    }

    public function user()
    {
        $user = Auth::user();

        return Inertia::render('Profile/Saved',[
            'active_courses' => $user->active_courses->count(),
            'collections' => $user->collections->count(),
            'save_count' =>  $user->saves->count(),
            'saves' => new CourseSaveCollection($user->saves)
        ]);
    }

}
