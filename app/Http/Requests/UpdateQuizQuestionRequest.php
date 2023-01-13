<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateQuizQuestionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'id' => 'required',
            'text' => 'required',
            'value' => 'nullable',
            'options' => 'array|min:2',
            'options.*.text' => 'required',
            'options.*.message' => 'required',
        ];
    }

    public function messages()
    {
        return[
            'options.min' => 'Question must have at least 2 options.',
            'text.required' => 'Question cannot be empty',
            'options.*.text.required' => 'Option text is required',
            'options.*.message.required' => 'Option message is required'
        ];
    }
}
