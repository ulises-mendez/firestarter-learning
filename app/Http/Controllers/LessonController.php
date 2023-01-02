<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Requests\StoreLessonRequest;
use App\Http\Requests\UpdateLessonRequest;
use App\Http\Resources\LessonInfoResource;
use App\Http\Resources\LessonUpdateResource;
use App\Models\Lesson;
use App\Models\VideoLesson;
use App\Models\Transcription;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str as Str;
use Owenoj\LaravelGetId3\GetId3;


class LessonController extends Controller
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
     * @param  \App\Http\Requests\StoreLessonRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLessonRequest $request)
    {
        $user = Auth::user()->id;

        $video = $request->file('video');
        $original_name = $video->getClientOriginalName();
        $video_extension = $video->getClientOriginalExtension();
        $size = $video->getSize();
        $video_store = $video->store('video');
        $final_name = basename($video_store);

        $video_lesson = VideoLesson::create([
            'original_name' => $original_name,
            'file_name' => $final_name,
            'extension' => $video_extension,
            'path' => $this->public_path($video_store),
            'size' => $size,
            'time' => $this->get_time(request()->file('video')),
            'created_by' => $user,
        ]);

    
        if ($request->hasFile('transcription')) {
        $transcription = $request->file('transcription');
        $transcription_name = $transcription->getClientOriginalName();
        $transcription_ext = $transcription->getClientOriginalExtension();
        $transcription_size = $transcription->getSize();
        $transcription_store = $transcription->store('transcription');

        
        $transcription_lesson = Transcription::create([
            'filename' => $transcription_name,
            'path' => $this->public_path($transcription_store),
            'size' => $transcription_size,
            'extension' => $transcription_ext,
        ]);
        }

        $lesson = Lesson::create([
            'course_id' => $request->course_id,
            'chapter_id' => $request->chapter_id,
            'order' => $request->order,
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'video_id' => $video_lesson->id,
            'transcription_id' => $request->has('transcription') ? $transcription_lesson->id : null,
            'premium' => $request->premium,
            'time' => $video_lesson->time,
        ]);
        
        return response()->json([
            'lesson' => new LessonInfoResource($lesson)
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Lesson  $lesson
     * @return \Illuminate\Http\Response
     */
    public function show(Lesson $lesson)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Lesson  $lesson
     * @return \Illuminate\Http\Response
     */
    public function edit(Lesson $lesson)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateLessonRequest  $request
     * @param  \App\Models\Lesson  $lesson
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateLessonRequest $request, Lesson $lesson)
    {
        $user = Auth::user()->id;

        $lesson->update([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'premium' => $request->premium
        ]);

        if($request->has('video'))
        {
            
            $video = $request->file('video');
            $original_name = $video->getClientOriginalName();
            $video_extension = $video->getClientOriginalExtension();
            $size = $video->getSize();
            $video_store = $video->store('video');
            $final_name = basename($video_store);
            $video_lesson = VideoLesson::create([
            'created_by' => $user,
            'extension' => $video_extension,
            'file_name' => $final_name,
            'original_name' => $original_name,
            'path' => $this->public_path($video_store),
            'size' => $size,
            'time' => $this->get_time(request()->file('video')),
            ]);

            $lesson->update(['video_id' => $video_lesson->id]);
        }

        if($request->has('transcription'))
        {
            $transcription = $request->file('transcription');
            $transcription_name = $transcription->getClientOriginalName();
            $transcription_ext = $transcription->getClientOriginalExtension();
            $transcription_size = $transcription->getSize();
            $transcription_store = $transcription->store('transcription');
            
            $prev = $lesson->transcription->id;
            $prevTranscription = Transcription::find($prev);

            $prevTranscription->delete();

            $transcription_lesson = Transcription::create([
                'filename' => $transcription_name,
                'path' =>  $this->public_path($transcription_store),
                'size' => $transcription_size,
                'extension' => $transcription_ext,
            ]);

            $lesson->update(['transcription_id' => $transcription_lesson->id]);
        }


        return response()->json([
            'message' => 'success',
            'lesson' => new LessonUpdateResource($lesson)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Lesson  $lesson
     * @return \Illuminate\Http\Response
     */
    public function destroy(Lesson $lesson)
    {
        $lesson->delete();

        return response()->json([
            'message' => 'success',
        ]);
    }
}
