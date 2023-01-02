<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CourseSaveCollection extends ResourceCollection
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
            function($save) 
            {
                return [
                    'id' => $save->id,
                    'title' => $save->course->title,
                    'thumbnail' => $save->course->thumbnail->path,
                    'released' => $save->course->created_at,
                    'slug' => $save->course->slug,
                    'time' => $save->course->time(),
                    'played' => $save->course->user_played()
                ];
            }
        );
    }
}
