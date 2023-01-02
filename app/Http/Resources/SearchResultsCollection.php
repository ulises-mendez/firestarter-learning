<?php

namespace App\Http\Resources;

use App\Models\Course;
use Illuminate\Http\Resources\Json\ResourceCollection;

class SearchResultsCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return $this->collection->map(
            function($item){
                return[
                    'id' => $item->id,
                    'course_id' => $item->course_id,
                    'slug' => $item->slug,
                    'title' => $item->title,
                    'type' => $item->type,
                    'thumbnail' => Course::where('id', $item->course_id)->first()->thumbnail->path
                ];
            }
        );
    }
}
