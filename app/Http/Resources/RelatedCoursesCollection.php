<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class RelatedCoursesCollection extends ResourceCollection
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
            function ($course) {
                return [
                    'id' => $course->id,
                    'slug' => $course->slug,
                    'title' => $course->title,
                    'thumbnail' => $course->thumbnail->path,
                    'time' => $course->time(),
                    'released' => $course->created_at
                ];
                }
        );
    }
}
