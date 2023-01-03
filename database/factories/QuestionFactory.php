<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Question>
 */
class QuestionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return[
            'user_id' => fake()->numberBetween(1,10),
            'course_id' => 1,
            'chapter_id' => fake()->numberBetween(1,6),
            'lesson_id' => fake()->numberBetween(1,19),
            'content' => fake()->realText(),
            'reply_to' => null,
            'time' => fake()->numberBetween(1,4),
        ];
    }
}
