<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class UserCollection extends ResourceCollection
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
            function ($user) {
                return [
                    'id' => $user->id,
                    'created_at' => $user->created_at,
                    'email' => $user->email,
                    'name' => $user->name(),
                    'roles' => $user->roles->map(
                                function ($role) {
                                    return 
                                        $role->name
                                    ;
                                }
                            ),
                    'role' => $user->roles
                ];
                }
        );
    }
}