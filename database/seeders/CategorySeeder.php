<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            'Training and Education',
            'Business Analysis and Strategy',
            'Career Development',
            'Finance and Accounting',
            'Leadership and Management',
        ];

        foreach ($categories as $category)
        {
            Category::create([
                'title' => $category
            ]);
        }
        //
    }
}
