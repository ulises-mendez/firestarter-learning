<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuizQuestionResource extends JsonResource
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
            'options' => $this->options->transform(
                function ($option)
                {
                    return [
                        'id' => $option->id,
                        'text' => $option->text
                    ];
                }
            ),
            'text' => $this->text,
        ];
    }
}
