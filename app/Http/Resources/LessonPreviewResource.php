<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LessonPreviewResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $premium = $this->premium;
        return [
            'id' => $this->id,
            'chapter_id' => $this->chapter_id,
            'order'	=> $this->order,
            'title' => $this->title,
            'slug'	=> $this->slug,
            'video' => $this->video,
            'transcription' => $this->transcription,
            'premium' => $this->premium,
        ];
    }
}
