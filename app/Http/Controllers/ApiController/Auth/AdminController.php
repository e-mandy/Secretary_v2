<?php

namespace App\Http\Controllers\ApiController\Auth;

use App\DTOs\Auth\AdminDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\AdminRequest;
use App\Services\AuthService;

class AdminController extends Controller
{
    public function __construct(protected AuthService $service){}

    public function login(AdminRequest $request){

        // We extract which data we are going to use from the request
        $data = AdminDTO::fromRequest($request);


    }
}
