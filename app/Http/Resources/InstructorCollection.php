<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class InstructorCollection extends ResourceCollection
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
            function ($user)
            {
                return [
                    'avatar' => $user->avatar ? $user->avatar->path : '/img/empty/profile.png',
                    'id' => $user->id,
                    'name' => $user->first_name . ' ' . $user->last_name,
                    'title' => $user->profile->title,
                ];
            }
        );
    }
}
