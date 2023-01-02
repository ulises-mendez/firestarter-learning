<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\UserAvatar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class UserAvatarController extends Controller
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();

        if($request->hasFile('avatar'))
        {
            $images = $request->file('avatar');
            $name = $images[0]->getClientOriginalName();
            $size = $images[0]->getSize();
            $path = $images[0]->store('avatar');

            UserAvatar::updateOrCreate([
                'user_id' => $user->id
            ], [
                'original_name' => $name,
                'path' => $path,
                'size' => $size,
            ]);
        }
        return Redirect::back()->with('success', 'Avatar updated');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserAvatar  $userAvatar
     * @return \Illuminate\Http\Response
     */
    public function show(UserAvatar $userAvatar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserAvatar  $userAvatar
     * @return \Illuminate\Http\Response
     */
    public function edit(UserAvatar $userAvatar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserAvatar  $userAvatar
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserAvatar $userAvatar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserAvatar  $userAvatar
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserAvatar $userAvatar)
    {
        //
    }
}
