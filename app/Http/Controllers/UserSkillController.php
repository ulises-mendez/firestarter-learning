<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Requests\StoreUserSkillRequest;
use App\Http\Requests\UpdateUserSkillRequest;
use App\Models\UserSkill;

class UserSkillController extends Controller
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
     * @param  \App\Http\Requests\StoreUserSkillRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserSkillRequest $request)
    {
        $user = Auth::user();
        $skill= UserSkill::create([
            'user_id' => $user->id,
            'name' => $request->name,
            'years' => $request->years,
        ]);

        return response()->json([
            'skill' => $skill,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserSkill  $userSkill
     * @return \Illuminate\Http\Response
     */
    public function show(UserSkill $userSkill)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserSkill  $userSkill
     * @return \Illuminate\Http\Response
     */
    public function edit(UserSkill $userSkill)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserSkillRequest  $request
     * @param  \App\Models\UserSkill  $userSkill
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserSkillRequest $request, UserSkill $userSkill)
    {
        $userSkill->update([
            'name' => $request->name,
            'years' => $request->years,
        ]);

        return response()->json([
           'skill' => $userSkill,
        ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserSkill  $userSkill
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserSkill $userSkill)
    {
        $userSkill->delete();

        return response()->json([
           'success' => true,
           'skill' => $userSkill
        ]);

    }
}
