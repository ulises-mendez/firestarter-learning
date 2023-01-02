<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CourseCollectionResource extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public function toArray($request)
    {
        $course = $request->course;

        return $this->collection->map(
            function ($item) use($course) {
                return [
                    'description' => $item->description,
                    'id' => $item->id,
                    'thumbnail' => $item->thumbnail(),
                    'title' => $item->title,
                    'updated_at' => $item->updated_at,
                    'status' => $item->course_status($course),
                ];
                }
        );
    }
}
