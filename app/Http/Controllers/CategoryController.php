<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use App\Models\Category;
use App\Models\Topic;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CategoryTopicsCollection;

use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Categories/Index',[
            'filters' => Request::all('title'),
            'categories' => new CategoryCollection(
                                Category::orderBy('id', 'desc')
                                ->paginate(10)
                                )
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
     * @param  \App\Http\Requests\StoreCategoryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCategoryRequest $request)
    {
        $category = Category::create([
            'title' => $request->title
        ]);

        if(request()->expectsJson()){
            return response()->json([
                'id' => $category->id,
                'title' => $category->title
            ]);
        }
        
        return Redirect::back()->with('success', 'Category created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        $topics = new CategoryTopicsCollection(Topic::where('category_id', $category->id)->orderBy('updated_at', 'desc')->get());


        return Inertia::render('Admin/Categories/Edit',[
            'category' => $category,
            'topics' => $topics
        ]);
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        $topics =$category->topics;
        return Inertia::render('Admin/Categories/Edit',[
            'category' => $category,
            'topics' => $topics
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCategoryRequest  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        return response()->json([
            'message' => 'success'
        ]);
    }
}
