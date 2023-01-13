<?php

namespace App\Http\Controllers;

use Auth;
use Inertia\Inertia;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;

use App\Models\Course;
use App\Models\Chapter;
use App\Models\CourseInstructor;
use App\Models\CourseSkill;
use App\Models\CourseTopic;
use App\Models\Category;
use App\Models\Lesson;
use App\Models\Note;
use App\Models\Question;
use App\Models\Skill;
use App\Models\Thumbnail;
use App\Models\Transcription;
use App\Models\Topic;
use App\Models\User;
use App\Models\VideoLesson;
use Illuminate\Support\Facades\Request as RequestFilter;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\CourseChapterSelectCollection;
use App\Http\Resources\CourseCreatedResource;
use App\Http\Resources\CourseCollection;
use App\Http\Resources\CourseEditInstructors;
use App\Http\Resources\CourseNotesResource;
use App\Http\Resources\CourseThumbnailCollection;
use App\Http\Resources\CoursePreviewResource;
use App\Http\Resources\EditCourseResource;
use App\Http\Resources\LessonCourseResource;
use App\Http\Resources\LessonInfoResource;
use App\Http\Resources\LessonPreviewResource;
use App\Http\Resources\RelatedCoursesCollection;
use App\Http\Resources\ReviewCollection;
use App\Http\Resources\SkillCollection;
use App\Http\Resources\QuestionCollection;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\InstructorCollection;
use App\Http\Resources\TopicCollection;
use App\Http\Resources\TopicCoursesCollection;
use App\Models\LessonPlay;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

use \Done\Subtitles\Subtitles;
use Illuminate\Http\Client\Request as ClientRequest;
use Podlove\Webvtt\Parser;
use Podlove\Webvtt\ParserException;

class CourseController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function admin()
    {
        return Inertia::render('Admin/Courses/Index',[
            'courses' => new CourseCollection(
                Course::orderBy('id', 'desc')
                ->filter(RequestFilter::only('search', 'status', 'level', 'highlight'))
                ->paginate(15)
                ->appends(RequestFilter::all(),
            )),
            'filters' => RequestFilter::all('search', 'status', 'level', 'highlight'),

        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $instructors = User::whereHas("roles", function($q){ $q->where("name", "instructor"); })->get();
        $highlights = Course::where([['highlight', true] , ['released' , '!=', null]])
            ->orderBy('released', 'desc')
            ->get()
            ->take(10);
        $newest = Course::where('released' , '!=', null)
            ->orderBy('released', 'desc')
            ->get()
            ->take(10);
        
        /// Display Courses by category
        return Inertia::render('Courses/Index',[
            'all' => new CourseThumbnailCollection(Course::where('released' , '!=', null)->get()->take(10)),
            'highlights' => new CourseThumbnailCollection($highlights),
            'instructors' => new InstructorCollection($instructors),
            'newest' => new CourseThumbnailCollection($newest),
            'topics' =>  new TopicCoursesCollection($user->topics),
        ]
    );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {   
        $categories = Category::all();
        $skills = Skill::all();
        $topics = Topic::all();
        $select_instructors = User::whereHas("roles", function($q){ $q->where("name", "instructor"); })->get()->map(
            function ($user) {
                return [
                    'avatar' => $user->avatar ? $user->avatar->path : '/img/empty/profile.png',
                    'label' => $user->email,
                    'email' => $user->email,
                    'name' => $user->first_name . ' ' . $user->last_name,
                    'value' => $user->id
                ];
            }
        );

        return Inertia::render('Admin/Courses/Create',[
            'course' => null,
            'categories' => $categories,
            'skills' => new SkillCollection($skills),
            'topics' => $topics,
            'csrf' => csrf_token(),
            'select_instructors' => $select_instructors,
            'instructors' => []
        ]);
    }

    //public function chapters(Course $course, RequestFilter $request)
    public function chapters($id, Request $request)
    {
        
        $course = Course::find($id);
        
        
        $chapters = $course->chapters;
        
        
        if ($request->expectsJson())
        {
            return new CourseChapterSelectCollection($chapters);
        }
        
        //dd($chapters);
        
        return new CourseChapterSelectCollection($chapters);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCourseRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCourseRequest $request)
    {
        $user = Auth::user()->id;
        $thumb = $request->file('thumbnail');
        $name = $thumb[0]->getClientOriginalName();
        $final = basename($thumb[0]);
        $size = $thumb[0]->getSize();
        $extension = $thumb[0]->getClientOriginalExtension();
        $path = $thumb[0]->store('thumbnails');


        $thumbnail = Thumbnail::create([
            'original_name' => $name,
            'file_name' => $final,
            'path' => $this->public_path($path),
            'size' => $size,
            'created_by' => $user
        ]);

        $course = Course::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'description' => $request->description,
            'level' => $request->level,
            'thumbnail_id' => $thumbnail->id,
            'category_id' => $request->category_id,
            'highlight' => $request->highlight,
        ]);

        $skills = $request->skills;

        foreach ($skills as $skill) {
            CourseSkill::create([
                'skill_id' => $skill,
                'course_id' => $course->id,
            ]);
        }

        $topics = $request->topics;
        
        foreach ($topics as $topic) {
            CourseTopic::create([
                'topic_id' => $topic,
                'course_id' => $course->id,
            ]);
        }

        if(request()->expectsJson())
        {
            return response()->json([
                'course' => new CourseCreatedResource($course),
            ]);
        }
        
        return Redirect::back()->with('success','Course Store Success');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $course = Course::where('slug','=', $slug)->firstOrFail();

        $subtitles = Subtitles::load('cc/01.vtt');
        $blocks = $subtitles->getInternalFormat(); // array
        $first_lesson = $course->first_lesson()->slug;
        
        if (!Auth::user()){
            return Inertia::render('Courses/Preview',[
                'categories' => new CategoryCollection(Category::all()),
                'first_lesson' => $first_lesson,
                'course' => new CoursePreviewResource($course),
            ]);
        }
        if(Auth::user()){
            $user = Auth::user();
            $played = LessonPlay::where([['user_id' , '=' , $user->id], ['course_id', '=', $course->id]])->latest()->first();
            
            if($played !== null)
            {
                if ($played->lesson == null)
                {
                    return Redirect::route('course.lesson', [$course->slug, strval($first_lesson)]);
                }
                if ($played->lesson !== null)
                {
                    $slug = $played->lesson->slug;
                    return Redirect::route('course.lesson', [$course->slug, $slug]);
                }
            }
            return Redirect::route('course.lesson', [$course->slug, strval($first_lesson)]);
        }
    }


    public function show_lesson(Request $request,$course_slug, $lesson_slug)
    {
        $user = Auth::user();
        $course = Course::where('slug','=', $course_slug)->firstOrFail();
        $related = Course::where([['category_id', '=' , $course->category_id], ['id', '!=', $course->id]])->orderBy('created_at', 'desc')->limit(5)->get();
        $lesson = Lesson::where([
                                ['course_id', $course->id],
                                ['slug', $lesson_slug,]
                                ])->firstOrFail();

        if($lesson->transcription)
        {
        $transcript = $lesson->transcription->path;
        $time = null;
        $handle = file_get_contents($transcript, true);
        $parser = new Parser();
        $content = $handle;
        $result = $parser->parse($content);
        }

        if($request->time){
            $time = $request->time;
        }
 
        if($user !== null){
            $played = LessonPlay::where([['user_id' , '=' , $user->id], ['lesson_id', '=', $lesson->id]])->first();

            $time = $played ? $played->time : null;

            return Inertia::render('Courses/Lesson',[
                'course' => new LessonCourseResource($course),
                'transcript' => $lesson->transcription ? $transcript : null,
                'lesson' => new LessonInfoResource($lesson),
                'transcription' => $lesson->transcription ? $result['cues'] : [],
                'translation' => $lesson->transcription ? $transcript : [],
                'title' => $lesson->title,
                'csrf' => csrf_token(),
                'questions' => new QuestionCollection(
                    Question::where([['course_id', $course->id], ['reply_to', null]])
                    ->orderBy('id', 'desc')
                    ->paginate(10)
                ),
                'reviews' => new ReviewCollection($course->reviews),
                'related' => new RelatedCoursesCollection($related),
                'user_notes' => new CourseNotesResource($course),
                'time' => $time,
            ]);
        }
        if($user === null){
            return Inertia::render('Courses/Preview',[
                'isLesson' => true,
                'preview' => true,
                'premium' => $lesson->premium,
                'lesson' => $lesson->premium ? [
                    'title' => $lesson->title,
                    'slug' => $lesson->slug
                ] : new LessonPreviewResource($lesson),
                'categories' => new CategoryCollection(Category::all()),
                'course' => new CoursePreviewResource($course)
            ]);
        }
 
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function edit($course)
    {
        $user = Auth::user();
        $categories = Category::all();
        $info = Course::findOrFail($course);
        $skills = Skill::all();
        $topics = Topic::all();
        $courseStatus = [
            [
                'label' => 'Draft',
                'value' => 0,
            ],
            [
                'label' => 'Finished',
                'value' => 1,
            ]
        ];

        if(Auth::user()->hasRole('admin')){
            $courseStatus[] = [
                'label' => 'Released',
                'value' => 2,
            ];
        }

        $instructors = CourseInstructor::where('course_id', $course)->orderBy('updated_at')->get();


        $select_instructors = User::whereHas("roles", function($q){ $q->where("name", "instructor"); })->get()->map(
            function ($user) {
                return [
                    'avatar' => $user->avatar ? $user->avatar->path : '/img/empty/profile.png',
                    'label' => $user->email,
                    'email' => $user->email,
                    'name' => $user->first_name . ' ' . $user->last_name,
                    'value' => $user->id
                ];
            }
        );

        return Inertia::render('Admin/Courses/Edit', [
            'categories' => $categories,
            'csrf' => csrf_token(),
            'course' => new EditCourseResource($info),
            'instructors' => new CourseEditInstructors($instructors),
            'select_instructors' => $select_instructors,
            'skills' => new SkillCollection($skills),
            'topics' => new TopicCollection($topics),
            'courseStatus' => $courseStatus
        ]);
    }

    public function release(Request $request, $id)
    {
    
        $course = Course::find($id);
        $user = Auth::user()->id;

        $instructors = $request->instructors;
        if (count($instructors) > 0)
        {
        foreach($instructors as $instructor)
        {
            CourseInstructor::create([
                'course_id' => $course->id,
                'user_id' => $instructor
            ]);
        }
        }

        $course->update([
           'released' => $request->publish,
           'status' => 1,
           'highlight' => $request->highlight
        ]);

        //return dd($request);

        return Redirect::back()->with('success','Course Released Success');
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCourseRequest  $request
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCourseRequest $request, $id)
    {
        $course = Course::find($id);
        $user = Auth::user()->id;
        if($request->hasFile('thumbnail'))
        {
        $thumb = $request->file('thumbnail');
        $name = $thumb[0]->getClientOriginalName();
        $size = $thumb[0]->getSize();
        $extension = $thumb[0]->getClientOriginalExtension();
        $path = $thumb[0]->store('thumbnails');

        $prev_thumbnail = Thumbnail::where('id', $course->thumbnail_id)->first();

        Storage::delete(storage_path($prev_thumbnail->file_name));
        //Log::info($prev_thumbnail->file_name);
        $thumbnail = Thumbnail::create([
            'original_name' => $name,
            'file_name' => $path,
            'path' => $this->public_path($path),
            'size' => $size,
            'created_by' => $user
        ]);

        $course->update([
            'thumbnail_id' => $thumbnail->id
        ]);
        }
        // Course Skills
        $course_skills = $course->skills;
        $skills = $request->skills;
        // Compare the skills
        $prev_skills = [];
        $new_skills = [];
        foreach ($skills as $skill) 
        {
            $new_skills[]=$skill['id'];
        }
        foreach ($course_skills as $skill) 
        {
            $prev_skills[]=$skill['skill_id'];
        }
        // Delete previous
        foreach ($prev_skills as $skill)
        {
            if(in_array($skill, $new_skills) == false)
            {
                CourseSkill::where([
                    ['course_id' , '=', $course->id],
                    ['skill_id' , '=', $skill]
                ])->delete();
            }
        }
        // Create new course skills
        foreach ($new_skills as $skill) 
        {
            CourseSkill::firstOrCreate([
                'course_id' => $course->id,
                'skill_id' => $skill
            ]);
        }
        // Course Topics
        $course_topics = $course->topics;
        $topics = $request->topics;

        // Compare the skills
        $prev_topics = [];
        $new_topics = [];

        foreach ($topics as $topic) 
        {
            $new_topics[]=$topic['id'];
        }
        foreach ($course_topics as $topic) 
        {
            $prev_topics[]=$topic['topic_id'];
        }

        // Delete previous topics
        foreach ($prev_topics as $topic)
        {
            if(in_array($topic, $new_topics) == false)
            {
                CourseTopic::where([
                    ['course_id' , '=', $course->id],
                    ['topic_id' , '=', $topic]
                ])->delete();
            }
        }
        // Create new course topics
        foreach ($new_topics as $topic) 
        {
            CourseTopic::firstOrCreate([
                'course_id' => $course->id,
                'topic_id' => $topic
            ]);
        }

        $course->update([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'description' => $request->description,
            'level' => $request->level,
            'category_id' => $request->category_id,
            'highlight' => $request->highlight,
            'status' => $request->status,
            'released' => $request->publish
        ]);

        if($course->released )
        {
            $course->update([
                'status' => 1,
            ]);
        }
        

        return Redirect::back()->with('success','Course updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function destroy(Course $course)
    {
        //
    }

    public function sub()
    {
        $vtt= 'storage/transcription/01.vtt';
        $path= 'storage/transcription/hI3gu0u36dFULfhI6wJ7w9srs3hSXUihbqKFR1DB.txt';
        $finalsubs = null;

        $string = "
        1
        00:02:17,440 --> 00:02:20,375
        Senator, we're making our final approach
        ";  

        //$subs = Subtitles::convert($path, $finalsubs);
        //fread($myfile,filesize("webdictionary.txt"));
        //$subtitleLoad = Subtitles::loadFile($path);
        //$subs = $subtitleLoad->getInternalFormat();
        //Subtitles::fileContentToInternalFormat($path);
        
        $handle = file_get_contents($path, true);
        //$subtitles = Subtitles::load($handle, 'srt');
        $parser = new Parser();
        $content = $handle;
        $result = $parser->parse($content);

        $array = [];
        
        return dd($result['cues']);
    }

    public function saveSub(ClientRequest $request){
        $path= '/storage/transcription/hI3gu0u36dFULfhI6wJ7w9srs3hSXUihbqKFR1DB.txt';

        
        $handle = file_get_contents($path, true);
        $parser = new Parser();

        $content = $handle;
        $result = $parser->parse($content);

        if($handle)
        {
            return $handle;
        }
    }
}
