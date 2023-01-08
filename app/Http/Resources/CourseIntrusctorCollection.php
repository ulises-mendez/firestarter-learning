<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CourseIntrusctorCollection extends ResourceCollection
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
            function ($user)
            {
                return [
                    'id' => $user->id,
                    //'course' => $user->course,
                    'released' => $user->course->released,
                    'slug' => $user->course->slug,
                    'thumbnail' => $user->course->thumbnail->path,
                    'title' => $user->course->title,
                ];
            }
        );
    }
}
