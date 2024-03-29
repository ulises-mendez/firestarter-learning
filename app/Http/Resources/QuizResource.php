<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuizResource extends JsonResource
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
            'id' => $this->id,
            'chapter' => $this->chapter ? [
                'id' => $this->chapter->id,
                'title' => $this->chapter->title,
            ] : $this->chapter,
            'course' => [
                'id' =>  $this->course->id,
                'title' => $this->course->title,
            ]
        ];
    }
}
