<?php

namespace Database\Seeders;

use App\Models\Thumbnail;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use function PHPSTORM_META\map;

class ThumbnailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Thumbnail::create([
            'original_name' => 'leadership-strategies-for-women.jpeg',
            'file_name' => 'leadership-strategies-for-women.jpeg',
            'path' => '/img/thumbnails/leadership-strategies-for-women.jpeg',
            'size' => 38003,
            'created_by' => 1,
        ]);
    }
}
