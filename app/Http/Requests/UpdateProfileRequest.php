<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
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
            'description' => 'nullable',
            'first_name' => 'required',
            'last_name' =>'required',
            'country' => 'required',
            'city' => 'required',
            'street' => 'required',
            'postal_code' => 'required',
        ];
    }
}
