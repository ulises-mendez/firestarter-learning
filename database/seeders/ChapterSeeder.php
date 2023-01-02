<?php

namespace Database\Seeders;

use App\Models\Chapter;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ChapterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Chapter::factory()->create([
            'course_id' => 1,
            'title' => 'Introduction',
            'order' => 1,
        ]);

        Chapter::factory()->create([
            'course_id' => 1,
            'title' => '1. Gender Intelligence',
            'order' => 2,
        ]);

        Chapter::factory()->create([
            'course_id' => 1,
            'title' => '2. Leadership Strategies for Women',
            'order' => 3,
        ]);

        Chapter::factory()->create([
            'course_id' => 1,
            'title' => '3. Communication Strategies for Women',
            'order' => 4,
        ]);

        Chapter::factory()->create([
            'course_id' => 1,
            'title' => '4. Championing Women\'s Leadership',
            'order' => 5,
        ]);
        
        Chapter::factory()->create([
            'course_id' => 1,
            'title' => 'Conclusion',
            'order' => 6,
        ]);
    }
}
