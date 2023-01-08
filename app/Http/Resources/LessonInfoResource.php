<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LessonInfoResource extends JsonResource
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
            'chapter_id' => $this->chapter_id,
            'order'	=> $this->order,
            'title' => $this->title,
            'slug'	=> $this->slug,
            'video' => $this->video,
            'transcription' => $this->transcription ? [
                'path' => '/' . $this->transcription->path
            ] : null,
            'premium' => $this->premium,
        ];
    }
}
