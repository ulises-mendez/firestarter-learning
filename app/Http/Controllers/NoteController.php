<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Requests\StoreNoteRequest;
use App\Http\Requests\UpdateNoteRequest;
use App\Models\Course;
use App\Models\Note;
use Illuminate\Http\Request;
use App\Http\Resources\CourseNotesResource;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $notes = Auth::user()->notes();
        if ($request->wantsJson()) {
            return $notes;
        }
    }

    public function course(Request $request, $course_slug){
        $course = Course::where('slug','=', $course_slug)->firstOrFail();
        if ($request->wantsJson()) {
            return new CourseNotesResource($course);
        }

        return new CourseNotesResource($course);
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
     * @param  \App\Http\Requests\StoreNoteRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreNoteRequest $request)
    {
        $user = Auth::user();
        $note = Note::create([
            'user_id' => $user->id,
            'course_id' => $request->course_id,
            'chapter_id' => $request->chapter_id,
            'lesson_id' => $request->lesson_id,
            'content' => $request->content,
            'time' => $request->time
        ]);
        
        return  response()->json([
            'note' => $note->content,
            'chapter' => $note->chapter,
            'lesson' => $note->lesson_id,
            'time' => $note->time,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function show(Note $note)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function edit(Note $note)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateNoteRequest  $request
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateNoteRequest $request, Note $note)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function destroy(Note $note)
    {
        //
    }
}
