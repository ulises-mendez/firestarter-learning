<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Requests\StoreWorkExperienceRequest;
use App\Http\Requests\UpdateWorkExperienceRequest;
use App\Models\WorkExperience;
use App\Http\Resources\UserWorksCollection;

class WorkExperienceController extends Controller
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
     * @param  \App\Http\Requests\StoreWorkExperienceRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreWorkExperienceRequest $request)
    {
        $user = Auth::user();
        $work = WorkExperience::create([
            'user_id' => $user->id,
            'title' => $request->title,
            'company_name' => $request->company,
            'country' => $request->country,
            'city' => $request->city,
            'currently' => $request->currently,
            'description' => $request->description,
            'from_month' => $request->from_month,
            'from_year' => $request->from_year,
            'to_month' => $request->to_month,
            'to_year' => $request->to_year,
        ]);

        return response()->json([
            'work' => $work
        ]);
    }

    public function works(){
        $user = Auth::user(); 
        $works = $user->works;
        return response()->json(new UserWorksCollection($works));}
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\WorkExperience  $workExperience
     * @return \Illuminate\Http\Response
     */
    public function show(WorkExperience $workExperience)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\WorkExperience  $workExperience
     * @return \Illuminate\Http\Response
     */
    public function edit(WorkExperience $workExperience)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateWorkExperienceRequest  $request
     * @param  \App\Models\WorkExperience  $workExperience
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateWorkExperienceRequest $request, WorkExperience $workExperience)
    {
        $workExperience->update([
            'title' => $request->title,
            'company' => $request->company_name,
            'country' => $request->country,
            'city' => $request->city,
            'currently' => $request->currently,
            'description' => $request->description,
            'from_month' => $request->from_month,
            'from_year' => $request->from_year,
            'to_month' => $request->currently == true ? null : $request->to_month,
            'to_year' => $request->currently == true ? null : $request->to_year,
        ]);

        return response()->json([
            'work' => $workExperience,
         ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\WorkExperience  $workExperience
     * @return \Illuminate\Http\Response
     */
    public function destroy(WorkExperience $workExperience)
    {
        $workExperience->delete();
        return response()->json([
           'success' => true,
        ]);
    }
}
