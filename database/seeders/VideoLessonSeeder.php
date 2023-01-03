<?php

namespace Database\Seeders;

use App\Models\VideoLesson;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VideoLessonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        VideoLesson::factory(1)->create();
    }
}
