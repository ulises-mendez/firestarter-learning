<?php

namespace Database\Seeders;

use App\Models\Transcription;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TranscriptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Transcription::create([
            'filename' => '01.vtt',
            'path' => 'cc/01.vtt',
            'extension' => 'vtt',
            'size' => 2458
        ]);
    }
}
