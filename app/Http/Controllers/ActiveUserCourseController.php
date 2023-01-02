<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Resources\ActiveCourseCollection;
use App\Http\Requests\StoreActiveUserCourseRequest;
use App\Http\Requests\UpdateActiveUserCourseRequest;
use App\Models\ActiveUserCourse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
class ActiveUserCourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        return Inertia::render('Profile/Show',[
            'active_courses' => $user->active_courses->count(),
            'courses' => new ActiveCourseCollection($user->active_courses),
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
     * @param  \App\Http\Requests\StoreActiveUserCourseRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreActiveUserCourseRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ActiveUserCourse  $activeUserCourse
     * @return \Illuminate\Http\Response
     */
    public function show(ActiveUserCourse $activeUserCourse)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ActiveUserCourse  $activeUserCourse
     * @return \Illuminate\Http\Response
     */
    public function edit(ActiveUserCourse $activeUserCourse)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateActiveUserCourseRequest  $request
     * @param  \App\Models\ActiveUserCourse  $activeUserCourse
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateActiveUserCourseRequest $request, ActiveUserCourse $activeUserCourse)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ActiveUserCourse  $activeUserCourse
     * @return \Illuminate\Http\Response
     */
    public function destroy(UpdateActiveUserCourseRequest $request)
    {

        $user = Auth::user();
        $active = ActiveUserCourse::where([
            ['course_id',$request->course],
            ['user_id', $user->id]
            ])->first();

        $active->delete();

        return Redirect::back();
    }
}
