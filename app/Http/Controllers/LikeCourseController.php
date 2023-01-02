<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Requests\StoreLikeCourseRequest;
use App\Http\Requests\UpdateLikeCourseRequest;
use App\Models\LikeCourse;
use App\Models\Course;

class LikeCourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreLikeCourseRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLikeCourseRequest $request)
    {
        $course_id = $request->course_id; 
        $user = Auth::user();

        $like = LikeCourse::where([
            ['user_id', '=', $user->id],
            ['course_id', $course_id]
        ])->first();

        if($like == null) {
            LikeCourse::create([
                'user_id' => $user->id,
                'course_id' => $course_id
            ]);
            $course = Course::find($course_id);
            return response()->json([
                'liked' => true,
                'likes' => $course->likes_count()
            ]);
        }else{
            $like->delete();
            $course = Course::find($course_id);
            return response()->json([
                'liked' => false,
                'likes' => $course->likes_count()
            ]);
        }

        return;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LikeCourse  $likeCourse
     * @return \Illuminate\Http\Response
     */
    public function show(LikeCourse $likeCourse)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LikeCourse  $likeCourse
     * @return \Illuminate\Http\Response
     */
    public function edit(LikeCourse $likeCourse)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateLikeCourseRequest  $request
     * @param  \App\Models\LikeCourse  $likeCourse
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateLikeCourseRequest $request, LikeCourse $likeCourse)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LikeCourse  $likeCourse
     * @return \Illuminate\Http\Response
     */
    public function destroy(LikeCourse $likeCourse)
    {
        //
    }
}
