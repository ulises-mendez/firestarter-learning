<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CourseCollection extends ResourceCollection
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
                    'title' => $course->title,
                    'level' => $course->level,
                    'highlight' => $course->highlight,
                    'category' => $course->category->title,
                    'chapters' => $course->chapters_count(),
                    'lessons' => $course->lessons_count(),
                    'slug' => $course->slug,
                    'status' => $course->status,
                    'released' => $course->released,
                    'thumbnail' => $course->thumbnail->path,
                    'time' => $course->time(),
                    'created_at' => $course->created_at,
                    'updated_at' => $course->updated_at,
                ];
                }
        );
    }
}
