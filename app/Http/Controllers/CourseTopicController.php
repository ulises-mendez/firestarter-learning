<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCourseTopicRequest;
use App\Http\Requests\UpdateCourseTopicRequest;
use App\Models\CourseTopic;

class CourseTopicController extends Controller
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
     * @param  \App\Http\Requests\StoreCourseTopicRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCourseTopicRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CourseTopic  $courseTopic
     * @return \Illuminate\Http\Response
     */
    public function show(CourseTopic $courseTopic)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CourseTopic  $courseTopic
     * @return \Illuminate\Http\Response
     */
    public function edit(CourseTopic $courseTopic)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCourseTopicRequest  $request
     * @param  \App\Models\CourseTopic  $courseTopic
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCourseTopicRequest $request, CourseTopic $courseTopic)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CourseTopic  $courseTopic
     * @return \Illuminate\Http\Response
     */
    public function destroy(CourseTopic $courseTopic)
    {
        //
    }
}
