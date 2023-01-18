<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserQuizQuestionResource extends JsonResource
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
            'question' => $this->question,
            'option' => [
                'id' => $this->option->id,
                'message' => $this->option->message,
                'text' => $this->option->text,
                'value' => $this->option->value
            ],
            'options' => $this->question->options->transform(
                function ($option)
                {
                    return [
                        'id' => $option->id,
                        'text' => $option->text,
                    ];
                }
            ),
        ];
    }
}
