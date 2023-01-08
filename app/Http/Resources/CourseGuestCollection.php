<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CourseGuestCollection extends ResourceCollection
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
                    'thumbnail' => $item->thumbnail->path,
                    'title' => $item->title,
                    'released' => $item->released,
                    'slug' => $item->slug
                ];
                }
        );
    }
}
