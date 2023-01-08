<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class TopicCoursesCollection extends ResourceCollection
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
                    'title' => $topic->topic->title,
                    'courses' => $topic->topic->courses_released->transform(
                        function($course_topic)
                        {
                            return [
                                'category'  => $course_topic->course->category->title,
                                'released' => $course_topic->course->released,
                                'slug' => $course_topic->course->slug,
                                'title' => $course_topic->course->title,
                                'thumbnail' => $course_topic->course->thumbnail->path
                            ];
                        }
                    ),
                ];
            }
        );
    }
}
