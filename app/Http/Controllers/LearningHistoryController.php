<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Requests\StoreLearningHistoryRequest;
use App\Http\Requests\UpdateLearningHistoryRequest;
use App\Models\ActiveUserCourse;
use App\Models\Course;
use App\Models\LearningHistory;
use App\Models\Lesson;
use Inertia\Inertia;
class LearningHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        return Inertia::render('Profile/History',[
            'active_courses' => $user->active_courses->count(),
            'collections' => $user->collections->count(),
            'save_count' =>  $user->saves->count(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreLearningHistoryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLearningHistoryRequest $request)
    {
        $user = Auth::user();

        LearningHistory::firstOrCreate([
            'user_id' => $user->id,
            'model_type' => $request->model_type,
            'model_id' => $request->model_id
        ]);

        $lesson = Lesson::find($request->model_id);
        
        $course_id = $lesson->course->id;

        $course = Course::find($course_id);
        $lessons = $course->lessons_count();

        $lessons_completed= LearningHistory::where([
            []
        ]);

        ActiveUserCourse::firstOrCreate([
            'user_id' => $user->id,
            'course_id' => $lesson->course->id,
        ]);

        

        /*
        $learningHistory = LearningHistory::create([
            'user_id' => $user->id,
            'model_type' => $request->model_type,
            'model_id' => $request->model_id
        ]);*/

        return response()->json([
           'status' =>'success',]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LearningHistory  $learningHistory
     * @return \Illuminate\Http\Response
     */
    public function show(LearningHistory $learningHistory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LearningHistory  $learningHistory
     * @return \Illuminate\Http\Response
     */
    public function edit(LearningHistory $learningHistory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateLearningHistoryRequest  $request
     * @param  \App\Models\LearningHistory  $learningHistory
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateLearningHistoryRequest $request, LearningHistory $learningHistory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LearningHistory  $learningHistory
     * @return \Illuminate\Http\Response
     */
    public function destroy(LearningHistory $learningHistory)
    {
        //
    }
}
