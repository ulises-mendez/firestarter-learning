<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use App\Models\Chapter;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(1)->create();
        //
        /*
        User::create([
            'email' => 'instructor@example.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ])->assignRole('instructor');
        */
        // OK
        //$this->call(ProfileSeeder::class);
        //$this->call(RoleSeeder::class);
        //$this->call(CourseSeeder::class);
        //$this->call(LessonSeeder::class);
        //$this->call(ChapterSeeder::class);
        //$this->call(LessonSeeder::class);
        //$this->call(ReviewSeeder::class);
        // TEST
        //$this->call(QuestionSeeder::class);
        //$this->call(CategorySeeder::class);
        $this->call(TopicSeeder::class);
    }
}
