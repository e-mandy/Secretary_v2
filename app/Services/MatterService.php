<?php

namespace App\Services;

use App\Http\Resources\MatterResource;
use App\Models\Matter;

class MatterService{
    public function index(){
        $matters = Matter::select("id", "name")->get();

        return MatterResource::collection($matters);
    }
}