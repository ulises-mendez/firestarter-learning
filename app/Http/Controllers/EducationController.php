<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Requests\StoreEducationRequest;
use App\Http\Requests\UpdateEducationRequest;
use App\Models\Education;

class EducationController extends Controller
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

    public function user(){
        $user = Auth::user();

        $education = $user->education();
        
        return response()->json([
            'education' => $education
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
     * @param  \App\Http\Requests\StoreEducationRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEducationRequest $request)
    {
        $user = Auth::user();

        Education::create([
            'user_id' => $user->id,
            'level' => $request->level,
            'field' => $request->field,
            'college' => $request->college,
            'city' => $request->city,
            'from_month' => $request->from_month,
            'from_year' => $request->from_year,
            'to_month' => $request->currently == true ? null : $request->to_month,
            'to_year' => $request->currently == true ? null : $request->to_year,
            'currently' => $request->currently
        ]);

        //$education = $user->education;
        return response()->json([
            'success' => 'New Education Added'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Education  $education
     * @return \Illuminate\Http\Response
     */
    public function show(Education $education)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Education  $education
     * @return \Illuminate\Http\Response
     */
    public function edit(Education $education)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateEducationRequest  $request
     * @param  \App\Models\Education  $education
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEducationRequest $request, Education $education)
    {
        $education->update([
            'level' => $request->level,
            'field' => $request->field,
            'college' => $request->college,
            'city' => $request->city,
            'from_month' => $request->from_month,
            'from_year' => $request->from_year,
            'to_month' => $request->currently == true ? null : $request->to_month,
            'to_year' => $request->currently == true ? null : $request->to_year,
            'currently' => $request->currently
        ]);

        return response()->json([
            'education' => $education,
         ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Education  $education
     * @return \Illuminate\Http\Response
     */
    public function destroy(Education $education)
    {
        $education->delete();

        return response()->json([
            'message' => 'success',
         ]);
    }
}
