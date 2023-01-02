<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CourseEditInstructors extends ResourceCollection
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
                    'avatar' => $course->user->avatar ? $course->user->avatar->path : '/img/empty/profile.png',
                    'email' => $course->user->email,
                    'id' => $course->id,
                    'name' => $course->user->first_name . ' ' . $course->user->last_name
                ];
            }
        );
    }
}
