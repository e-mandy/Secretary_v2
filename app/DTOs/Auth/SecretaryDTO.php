<?php

namespace App\DTOs\Auth;

use App\Http\Requests\Auth\LoginSecretaryRequest;
use App\Http\Requests\Auth\RegisterSecretaryRequest;

readonly class RegisterSecretaryDTO{
    public function __construct(
        public string $lastname,
        public string $firstname,
        public string $email,
        public string $password
    ){}

    public static function fromRequest(RegisterSecretaryRequest $request) : self
    {
        $data = $request->validated();

        return new self(
            lastname: $data['lastname'],
            firstname: $data['firstname'],
            email: $data['email'],
            password: $data['password']
        );
    }
}

readonly class LoginSecretaryDTO{
    public function __construct(
        public string $email,
        public string $password
    ){}

    public static function fromRequest(LoginSecretaryRequest $request): self
    {
        $data = $request->validated();

        return new self(
            email: $data['email'],
            password: $data['password']
        );
    }
}