<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CourseTopicCollection extends ResourceCollection
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
            function ($topic)
            {
                return [
                    'by' => 'firestarter',
                    'created_at' => $topic->course->created_at,
                    'thumbnail' => $topic->course->thumbnail->path,
                    'title' => $topic->course->title,
                    'slug' => $topic->course->slug,
                ];
            }
        );
    }
}


