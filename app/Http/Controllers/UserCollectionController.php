<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Requests\StoreUserCollectionRequest;
use App\Http\Requests\UpdateUserCollectionRequest;
use App\Http\Requests\ToggleCourseCollectionRequest;
use App\Http\Resources\CourseCollectionResource;
use App\Http\Resources\UserCollectionResource;
use App\Models\UserCollection;
use App\Models\Course;
use App\Models\CourseCollection;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Inertia\Inertia;
class UserCollectionController extends Controller
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
    public function deleteItem()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreUserCollectionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserCollectionRequest $request)
    {
        $user = Auth::user();
        $collection = UserCollection::create([
            'user_id' => $user->id,
            'title' => $request->title,
            'description' => $request->description,
        ]);

        $collection['thumbnail'] = "/img/empty/collection.jpg";
        if ($request->expectsJson())
        {
            return response()->json([
                'collection' => $collection
            ]);
        }

        return Redirect::back()->with('success','Collection created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserCollection  $userCollection
     * @return \Illuminate\Http\Response
     */
    public function show(UserCollection $userCollection)
    {
        $user = Auth::user();

        $collections = $user->collections->count();


        return Inertia::render('Collections/Collection', [
            'active_courses' => $user->active_courses->count(),
            'collection' => new UserCollectionResource($userCollection),
            'collections' => $collections,
            'courses' => $userCollection->course_collections,
            'save_count' =>  $user->saves->count(),
            'title' => $userCollection->title,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserCollection  $userCollection
     * @return \Illuminate\Http\Response
     */
    public function edit(UserCollection $userCollection)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserCollectionRequest  $request
     * @param  \App\Models\UserCollection  $userCollection
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserCollectionRequest $request, UserCollection $userCollection)
    {
        $userCollection->update([
            'title' => $request->title,
            'description' => $request->description
        ]);

        if($request->expectsJson())
        {
            return response()->json([
                'collection' => $userCollection
            ]);
        }

        return Redirect::back()->with('success','Collection has been updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserCollection  $userCollection
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request,UserCollection $userCollection)
    {
        $userCollection->delete();

        if ($request->expectsJson())
        {
            return response()->json([
                'success' => 'Successfully deleted'
            ]);
        }

        Redirect::route('me.collections')->with('success', 'Successfully deleted');
    }

    public function user(Request $request)
    {
        $user = Auth::user();

        $collections = $user->collections;

        if($request->expectsJson())
        {
            return response()->json(new CourseCollectionResource($collections));
        }
        
        return Inertia::render('Profile/Collections',[
            'collections' => new CourseCollectionResource($collections),
            'active_courses' => $user->active_courses->count(),
            'save_count' =>  $user->saves->count(),
        ]);
    }

    public function course(ToggleCourseCollectionRequest $request){
        $course = $request->course;
        $collection = $request->collection;

        $course_collection = CourseCollection::where([
            ['course_id', '=', $course],
            ['user_collection_id', $collection]
        ])->first();


        if($course_collection == null) {
            CourseCollection::create([
                'course_id' => $course,
                'user_collection_id' => $collection
            ]);
            return response()->json([
                'status' => true
            ]);
        }else{
            $course_collection->delete();
            return response()->json(['like' => false]);
        }

        return 'collections';
    }
}