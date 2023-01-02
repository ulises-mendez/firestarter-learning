<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\User;
//use Illuminate\Http\Request;
use App\Http\Resources\UserCollection;
use Illuminate\Support\Facades\Request;
use Spatie\Permission\Models\Role;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $filters = Request::exists('search');
        
        return Inertia::render('Admin/Team',[
            'csrf' => csrf_token(),
            'filters' => Request::all('search', 'role', 'trashed'),
            'admins' => new UserCollection(User::whereHas("roles", function($q){ $q->where("name", "admin"); })->get()),
            'instructors' => new UserCollection(User::whereHas("roles", function($q){ $q->where("name", "instructor"); })->get()),
            'users' => $filters === false ? null : new UserCollection(
                User::orderBy('id', 'desc')
                    ->filter(Request::only('search', 'role', 'trashed'))
                    ->paginate()
                    ->appends(Request::all())
            ),
            'team' => new UserCollection(User::whereHas("roles", function($q){ $q->where("name", "admin")->orWhere('name','instructor'); })->get()), 
            'query' => $filters
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $filters = Request::exists('search');
        
        return response()->json([
            'users' => $filters === false ? null : new UserCollection(
                User::orderBy('id', 'desc')
                    ->filter(Request::only('search', 'role', 'trashed'))
                    ->paginate()
                    ->appends(Request::all())
            ),
        ]);
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
