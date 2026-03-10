<?php

namespace App\Http\Controllers\ApiController\Auth;

use App\Http\Controllers\Controller;
use App\Services\AuthService;

class SecretaryController extends Controller
{
    public function __construct(
        public AuthService $service
    ){}
}
