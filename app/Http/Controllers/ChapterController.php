<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreChapterRequest;
use App\Http\Requests\UpdateChapterRequest;
use App\Models\Chapter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ChapterController extends Controller
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
     * @param  \App\Http\Requests\StoreChapterRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreChapterRequest $request)
    {
        $section = Chapter::create([
            'course_id' => $request->course_id,
            'title' => $request->title,
            'order' => $request->order
        ]);
        if ($request->expectsJson())
        {
            return response()->json([
                'section' => $section
            ]);
        }

        Redirect::back()->with('success','Chapter created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Chapter  $chapter
     * @return \Illuminate\Http\Response
     */
    public function show(Chapter $chapter)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Chapter  $chapter
     * @return \Illuminate\Http\Response
     */
    public function edit(Chapter $chapter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateChapterRequest  $request
     * @param  \App\Models\Chapter  $chapter
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateChapterRequest $request, Chapter $chapter)
    {
        $chapter->update([
            'title' => $request->title,
        ]);

        if ($request->expectsJson())
        {
            return response()->json([
                'chapter' => $chapter
            ]);
        }

        return Redirect::back()->with('success', 'Chapter updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Chapter  $chapter
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request,Chapter $chapter)
    {
        $chapter->delete();

        if ($request->expectsJson())
        {
            return response()->json([
                'message' => 'success'
            ]);
        }

        return Redirect::back()->with('success', 'Chapter updated');

    }
}
