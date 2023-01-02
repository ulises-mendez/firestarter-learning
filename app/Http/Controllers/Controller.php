<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Owenoj\LaravelGetId3\GetId3;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    public function public_path(String $path)
    {

        $storage_disk = env('FILESYSTEM_DISK');
        $add_path = '';

        switch ($storage_disk)
        {
            case 'public':
                $add_path = '/';
            break;
            case 'local':
                $add_path = '/storage/';
            break;
        }        
        $final_path= $add_path . $path;

        return $final_path;
    }

    public function get_time($video)
    {
        $track = GetId3::fromUploadedFile($video);
        $video_time = $track->getPlaytimeSeconds();

        return $video_time;
    }

}
