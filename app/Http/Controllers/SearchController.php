<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryCollection;
use App\Http\Resources\SearchResultsCollection;
use App\Models\Category;
use App\Models\Course;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Request as FacadeRequest;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function __invoke(Request $request)
    {
        $lessons =  Lesson::query()
        ->select('id', 'title', 'slug', 'created_at', 'course_id', 
           
            DB::raw('"lessons" as type')
        )
        ->where('title', 'LIKE', '%'. $request->keywords .'%');
        

        $results =  Course::query()
        ->select('id', 'title', 'slug', 'created_at',
            DB::raw('id as course_id'),
            DB::raw('"courses" as type')
        )
        ->where('title', 'LIKE', '%'. $request->keywords .'%')
        ->union($lessons)->orderBy('created_at')->get();

        return Inertia::render('Search',[
            'categories' => new CategoryCollection(Category::all()),
            'filters' => $request,
            'results' => new SearchResultsCollection($results)
        ]);
    }

    public function search(Request $request)
    {
        $lessons =  Lesson::query()
        ->select('id', 'title', 'slug', 'created_at', 'course_id', 
           
            DB::raw('"lessons" as type')
        )
        ->where('title', 'LIKE', '%'. $request->keywords .'%');
        

        $results =  Course::query()
        ->select('id', 'title', 'slug', 'created_at',
            DB::raw('id as course_id'),
            DB::raw('"courses" as type')
        )
        ->where('title', 'LIKE', '%'. $request->keywords .'%')
        ->union($lessons)->orderBy('created_at')->get();

        return Inertia::render('Search',[
            'categories' => new CategoryCollection(Category::all()),
            'filters' => $request,
            'results' => new SearchResultsCollection($results)
        ]);
    }
}
