<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CompletedCoursesCollection extends ResourceCollection
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
            function ($item) {
                return [
                    'id' => $item->id,
                    'title' => $item->course->title,
                    'thumbnail' => $item->course->thumbnail->path,
                    'released' => $item->course->created_at,
                    'slug' => $item->course->slug,
                    'created_at' => $item->created_at
                ];
            }
        );
    }
}
