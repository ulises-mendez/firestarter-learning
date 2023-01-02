<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserCurriculumResource extends JsonResource
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
            'id' => $this->profile->id,
            'description' => $this->profile->description,
            'name' => $this->profile->first_name . ' ' . $this->profile->last_name,
            'first_name' => $this->profile->first_name,
            'headline' => $this->profile->headline,
            'last_name' => $this->profile->last_name,
            'country' => $this->profile->country,
            'street' => $this->profile->street,
            'city' => $this->profile->city,
            'postal_code' => $this->profile->postal_code,
            
        ];
    }
}
