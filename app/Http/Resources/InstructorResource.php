<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InstructorResource extends JsonResource
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
            'avatar' => $this->avatar ? $this->avatar->path : '/img/empty/profile.png',
            'id' => $this->id,
            'name' => $this->first_name . ' ' . $this->last_name,
            'title' => $this->profile->headline,
            'description' => $this->profile->description
        ];
    }
}
