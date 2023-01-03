<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = Role::create([
            'name' => 'admin',
        ]);

        $editor = Role::create([
            'name' => 'editor',
        ]);

        $instructor = Role::create([
            'name' => 'instructor',
        ]);

        $student = Role::create([
            'name' => 'student',
        ]);

        
        /*
        *** Single Roles Permission
        Permission::create(['name' => 'route.name'])->assingRole($admin);
        **** Multiple Roles Permission
        Permission::create(['name' => 'route.name'])->syncRoles([$admin,editor]);
        */
        
        Permission::create(['name' => 'admin'])->assignRole($admin);
        Permission::create(['name' => 'editor'])->syncRoles([$admin,$editor]);
        Permission::create(['name' => 'instructors'])->syncRoles([$admin,$editor,$instructor]);
        Permission::create(['name' => 'instructor'])->syncRoles([$instructor]);
        Permission::create(['name' => 'student'])->syncRoles([$student]);

    }
}
