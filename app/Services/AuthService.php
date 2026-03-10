<?php

namespace App\Services;

use App\DTOs\Auth\AdminDTO;
use App\DTOs\Auth\LoginSecretaryDTO;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthService{

    public function loginAsAdmin(AdminDTO $data){
        // Check if the email exists in the database
        $user = User::where('email', $data->email)->first();
        
        if(!$user) throw new \Exception("Données invalides");

        $isMatch = Hash::check($data->password, $user->password);
        if(!$isMatch) throw new \Exception("Données invalides");

        $token = $user->createToken(
            "Token Connexion User: " . $user->email,
            ["*"]
        );

        return [
            "user" => [
                "email" => $user->email,
                "lastname" => $user->lastname,
                "firstname" => $user->firstname,
                "role" => $user->role
            ],
            "access_token" => $token
        ];
    }

    public function loginAsSecretary(LoginSecretaryDTO $data){
        // Check if the email exists in the database
        $user = User::where('email', $data->email)->first();

        if(!$user) throw new \Exception("Données invalides");

        $isMatch = Hash::check($data->password, $user->password);
        if(!$isMatch) throw new \Exception("Données invalides");

        $token = $user->createToken("Token Connexion User: " . $user->email);

        return [
            "user" => [
                "email" => $user->email,
                "lastname" => $user->lastname,
                "firstname" => $user->firstname,
                "role" => $user->role
            ],
            "access_token" => $token
        ];
    }
}