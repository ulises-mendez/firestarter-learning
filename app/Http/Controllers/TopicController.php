<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Requests\StoreTopicRequest;
use App\Http\Requests\UpdateTopicRequest;
use App\Models\Course;
use App\Models\CourseTopic;
use App\Models\Topic;
use App\Models\Category;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CourseTopicCollection;
use App\Http\Resources\TopicCollection;
use App\Http\Resources\TopicAdminCollection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class TopicController extends Controller
{
    public function admin()
    {
        return Inertia::render('Admin/Topics/Index', [
            'topics' => new TopicAdminCollection(Topic::orderBy('id', 'asc')
            ->paginate(10))
        ]);
    }
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
     * @param  \App\Http\Requests\StoreTopicRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTopicRequest $request)
    {

        $topic = Topic::create([
            'category_id' => $request->category_id,
            'title' => $request->title,
            'description' => $request->description
        ]);

        if(request()->expectsJson()){
            return response()->json([
                'id' => $topic->id,
                'title' => $topic->title
            ]);
        }

        return Redirect::back()->with('success', 'Topic created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Topic  $topic
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request,Topic $topic)
    {
        $courses = CourseTopic::where('topic_id', $topic->id)->get();
        return Inertia::render('Topics/Show',[
            'categories' => new CategoryCollection(Category::all()),
            'topic' => $topic,
            'filters' => $request,
            'topics' => new TopicCollection(Topic::where('category_id', $topic->category_id)->get()),
            'courses' => new CourseTopicCollection($courses),
            'trending' => [],
            //'courses2' => $topic->courses,
            //'trending' => $topic->trend()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Topic  $topic
     * @return \Illuminate\Http\Response
     */
    public function edit(Topic $topic)
    {
        return Inertia::render('Admin/Topics/Edit', [
            'topic' => $topic
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTopicRequest  $request
     * @param  \App\Models\Topic  $topic
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTopicRequest $request, Topic $topic)
    {
        $topic->update([
            'title' => $request->title,
            'description' => $request->description
        ]);

        return Redirect::back()->with('success', 'Topic has been updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Topic  $topic
     * @return \Illuminate\Http\Response
     */
    public function destroy(Topic $topic)
    {
        $topic->delete();
        
        return Redirect::back()->with('success', 'Topic has been deleted');
    }
}
