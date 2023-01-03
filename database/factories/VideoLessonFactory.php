<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\VideoLesson>
 */
class VideoLessonFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'original_name' => 'Video Lesson.mp4',
            'file_name' => 'sJNeLH28CGFOST61hQXPwaXn7r2vQPZXO0gY3jin.mp4',
            'extension' => 'mp4',
            'path' => 'https://res.cloudinary.com/dtddixgse/video/upload/v1672761430/01_Women_lead_differently_gpjlnc.mp4',
            'size' => 135488971,
            'created_by' => 1,
            'time' => 85
        ];
    }
}
