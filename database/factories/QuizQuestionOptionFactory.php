<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\QuizQuestionOption>
 */
class QuizQuestionOptionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'quiz_id' => fake()->numberBetween(1,10),
            'quiz_question_id' => fake()->numberBetween(1,10),
            'text' => fake()->realText(12),
            'message' => fake()->realText(15),
            'value' => fake()->boolean()
        ];
    }
}
