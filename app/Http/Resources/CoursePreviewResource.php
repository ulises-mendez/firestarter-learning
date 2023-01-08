<?php

namespace App\Http\Resources;

use App\Http\Resources\ReviewCollection;
use Illuminate\Http\Resources\Json\JsonResource;

class CoursePreviewResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'content' => [],
            'by' => null,
            'thumbnail' => $this->thumbnail->path,
            'likes' => $this->likes_count(),
            'time' => $this->time(),
            'level' => $this->level,
            'released' => $this->released,
            'description' => $this->description,
            'rate' => 5,
            'ratings' => 5,
            'instructors' => [],
            'skills' => $this->skills
                        ->transform(
                            function($course_skill)
                            {
                                return [
                                    'id' => $course_skill->skill->id,
                                    'title' => $course_skill->skill->title
                                ];
                            }
                        ),
            'slug' => $this->slug,
            'reviews' => new ReviewCollection($this->reviews),
            'content' => $this->chapters()
                            ->orderBy('order', 'asc')
                            ->get()
                            ->transform(
                            function($chapter){
                                return [
                                    'title' => $chapter->title,
                                    'time' => $chapter->duration(),
                                    'lessons' => $chapter->lessons()->orderBy('order', 'asc')->get()
                                    ->transform(
                                    function($lesson) {
                                        return [
                                            'id' => $lesson->id,
                                            'order' => $lesson->order,
                                            'title' => $lesson->title,
                                            'slug' => $lesson->slug,
                                            'video' => $lesson->video,
                                            'transcription' => $lesson->transcription,
                                            'premium' => $lesson->premium,
                                        ];
                                    })
                                ];
                            }
                        ),
            'preview' => 'slug'
        ];
    }
}
