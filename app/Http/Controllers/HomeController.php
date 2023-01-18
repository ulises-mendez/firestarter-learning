<?php

namespace App\Http\Controllers;


use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CourseGuestCollection;
use App\Http\Resources\TopicCollection;
use App\Models\Category;
use App\Models\Course;
use App\Models\Topic;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $latest = Course::where('released' , '!=', null)->orderBy('created_at')->get()->take(12);
        return Inertia::render('Welcome',[
            'categories' => new CategoryCollection(Category::all()),
            'topics'  => new TopicCollection(Topic::all()->take(10)),
            'latest' => new CourseGuestCollection($latest)
        ]);
    }
}
