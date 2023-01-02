<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Resources\UserAvatarResource;
use App\Models\User;
use Illuminate\Http\Request;

use Inertia\Inertia;
use App\Http\Resources\UserCurriculumResource;




class CurriculumController extends Controller
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
        $user = Auth::user();
        //return Inertia::render('Profile/Curriculum',[
        return Inertia::render('Profile/Resume',[
            'avatar' => $user->avatar ? new UserAvatarResource($user->avatar) : '/img/empty/profile.png',
            'profile' => new UserCurriculumResource($user),
            'user_works' => $user->works,
            'user_education' => $user->education,
            'user_skills' => $user->skills,
            'csrf' => csrf_token()
        ]);
    }

    public function download(){
        $user = Auth::user();
        
        $works = $user->works;
        $education = $user->education;
        $skills = $user->skills;
        $pdf = \PDF::loadView('pdf.resume', [
            'name' => $user->profile->first_name . ' ' . $user->profile->last_name,
            'works' => $works,
            'education' => $education,
            'skills' => $skills,
            'email' => $user->email,
            'address' => $user->profile->street,
            'city' => $user->profile->city,
            'profile' => null
        ]);
        
        return $pdf->download('resume.pdf');
        //return dd($user);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
