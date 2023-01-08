<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ActiveCourseCollection extends ResourceCollection
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
            function ($item)
            {
                return [
                    'id' => $item->course_id,
                    'title' => $item->course->title,
                    'thumbnail' => $item->course->thumbnail->path,
                    'slug' => $item->course->slug,
                    'time' => $item->course->time(),
                    'played' => $item->course->user_played(),
                    'released' => $item->course->released,
                    'saved' => $item->course->user_save(),
                ];
            }
        );
    }
}
