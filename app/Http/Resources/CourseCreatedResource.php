<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CourseCreatedResource extends JsonResource
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
            'category' => $this->category,
            'id' => $this->id,
            'level' => $this->level,
            'title' => $this->title,
            'description' => $this->description,
            'highlight' => $this->highlight,
            'skills' => $this->skills
                            ->transform(
                                function ($skill){
                                    return [
                                        'id' => $skill->id,
                                        'title' => $skill->skill->title,
                                    ];
                                }
                            ),
            'slug' => $this->slug,
            'thumbnail' => $this->thumbnail,
            'status' => $this->status,
            'topics' => $this->topics
                            ->transform(
                                function ($topic){
                                    return [
                                        'id' => $topic->id,
                                        'title' => $topic->topic->title,
                                    ];
                                }
                            )
        ];
    }
}
