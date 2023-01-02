<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Requests\StoreLessonPlayRequest;
use App\Models\ActiveUserCourse;
use App\Models\Course;
use App\Models\LearningHistory;
use App\Models\LessonPlay;
use App\Models\UserCompletedCourse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;

class LessonPlayController extends Controller
{
    public function __invoke(StoreLessonPlayRequest $request)
    {
        $user = Auth::user();
        
        $played = LessonPlay::updateOrCreate(
            ['user_id' => $user->id , 'lesson_id' => $request->lesson],
            ['time' => $request->time, 'course_id' => $request->course]
        );

        $completed = $request->completed ? now() : null;

        if($completed)
        {
            $played->update(['fulltime' => $played->lesson->time]);
            $course = Course::find($request->course);
            $course_lessons = $course->lessons_count();
            $completed_lessons = LessonPlay::where([
                ['course_id', $course->id],
                ['user_id', $user->id],
            ])
            ->get()
            ->count();

            if($completed_lessons !== $course_lessons)
            {
                ActiveUserCourse::firstOrCreate([
                    'user_id' => $user->id,
                    'course_id' => $course->id,
                ]);
            }
            if($completed_lessons == $course_lessons)
            {
                LearningHistory::firstOrCreate([
                    'user_id' => $user->id,
                    'model_type' => 'App\Models\Course',
                    'model_id' => $course->id,
                ]);

                UserCompletedCourse::firstOrCreate([
                    'user_id' => $user->id,
                    'course_id' => $course->id,
                ]);

                $active = ActiveUserCourse::where([
                    ['user_id', $user->id],
                    ['course_id', $course->id]
                ]);

                $active->delete();
            }

            if(!$played->completed)
            {
                $played->update([
                    'completed' => $completed
                ]);
            }
        }

        if($request->expectsJson())
        {
            return response()->json([
                'time' => $played,
            ]);
        }

        return Redirect::back();
    }
}
