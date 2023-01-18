<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Thumbnail>
 */
class ThumbnailFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $thumbnails = [
            'career-development.png',
            'creating_behavioral.jpeg',
            'leadership-strategies-for-women.jpeg',
            'leading.jpeg',
            'leadership.jpeg',
            'sales.jpeg',
            'develop.jpeg',
            'ideas.jpeg',
            'excel.jpeg',
            'decision.jpeg'
        ];
        $number = rand(0,9);
        $path = '/img/thumbnails/' . $thumbnails[$number];
        return [
            'original_name' => 'leadership-strategies-for-women.jpeg',
            'file_name' => 'leadership-strategies-for-women.jpeg',
            'path' => $path,
            'size' => 38003,
            'created_by' => 1,
        ];
    }
}
