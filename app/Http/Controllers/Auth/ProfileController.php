<?php

namespace App\Http\Controllers\Auth;

use Auth as AuthUser;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProfileRequest;
use App\Http\Requests\StoreUbicationProfileRequest;
use App\Http\Requests\StoreEducationProfileRequest;
use App\Http\Requests\StoreInterestsProfileRequest;
use App\Http\Requests\UpdateProfileRequest;
use App\Http\Resources\CategoryCollection;
use App\Models\Category;
use App\Models\Profile;
use App\Models\Topic;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (AuthUser::user()->hasProfile()){
            return Inertia::render('Auth/Register/Welcome',[
                'name' => Auth::user()->first_name
            ]);
        }
        return Inertia::render('Auth/Profile');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Ubication');
    }


    public function create_education()
    {
        return Inertia::render('Auth/Education');
    }

    public function create_interests()
    {
        return Inertia::render('Auth/Interests',[
            'categories' => new CategoryCollection(Category::all()),
        ]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProfileRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProfileRequest $request)
    {
        $user = User::find(auth()->user()->id);
        $user->update([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
        ]);
        
        $profile = Profile::updateOrCreate(
            ['user_id' => auth()->user()->id],
            [
            'first_name' => $request->first_name,
            'last_name' => $request->last_name
            ]
        );

        $profile->save();

        return Redirect::route('registration.profile');
    }

    public function store_ubication(StoreUbicationProfileRequest $request){
        $user_id = Auth::user()->id;

        $profile = Profile::where('user_id', $user_id)->first();

        $profile->update([
            'country' => $request->country,
            'street' => $request->street,
            'city' => $request->city,
            'postal_code' => $request->postal_code
        ]);

        return Redirect::route('profile.education');
    }

    public function store_education(StoreEducationProfileRequest $request){
        $user_id = Auth::user()->id;

        $profile = Profile::where('user_id', $user_id)->first();

        $profile->update([
            'level_education' => $request->level_education,
            'field' => $request->field,
            'school_name' => $request->school_name,
            'school_country' => $request->school_country,
            'school_city' => $request->school_city
        ]);

        return Redirect::route('profile.interests');
    }


    public function store_interests(StoreInterestsProfileRequest $request){
        $user_id = Auth::user()->id;

        $profile = Profile::where('user_id', $user_id)->first();

        $profile->update([
            'interests' => $request->interests,
        ]);

        User::where('id',$user_id)->update(['hasProfile' => now()]);

        return Redirect::route('courses');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Profile  $profile
     * @return \Illuminate\Http\Response
     */
    public function show(Profile $profile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Profile  $profile
     * @return \Illuminate\Http\Response
     */
    public function edit(Profile $profile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProfileRequest  $request
     * @param  \App\Models\Profile  $profile
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProfileRequest $request, Profile $profile)
    {
        $profile->update([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'country' => $request->country,
            'city' => $request->city,
            'street' => $request->street,
            'postal_code' => $request->postal_code,
            'description' => $request->description
        ]);

        if(request()->wantsJson()) {
            return $profile;
         }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Profile  $profile
     * @return \Illuminate\Http\Response
     */
    public function destroy(Profile $profile)
    {
        //
    }
}
