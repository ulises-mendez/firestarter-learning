<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lesson>
 */
class LessonFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'course_id' => fake()->numberBetween(1,10),
            'chapter_id' => fake()->numberBetween(1,10),
            'title' => 'Foo Title',
            'slug' => 'foo-title',
            'video_id' => 1,
            'transcription_id' => 1,
            'time' => 80,
            'premium' => 0,
            'order' => 1,
        ];
    }
}
