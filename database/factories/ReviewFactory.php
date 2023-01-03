<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Review>
 */
class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => fake()->numberBetween(2,8),
            'course_id' => 1,
            'chapter_id' => fake()->numberBetween(2,8),
            'lesson_id' => fake()->numberBetween(2,8),
            'rate' => fake()->numberBetween(3,5),
            'reply_to' => null,
            'time' => fake()->numberBetween(0,80),
            'content' => fake()->realText(),
        ];
    }
}
