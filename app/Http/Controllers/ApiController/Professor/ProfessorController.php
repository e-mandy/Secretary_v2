<?php

namespace App\Http\Controllers\ApiController\Professor;

use App\DTOs\Professor\ProfessorStoreDTO;
use App\DTOs\Professor\ProfessorUpdateDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\Professor\StoreProfessorRequest;
use App\Http\Requests\Professor\UpdateProfessorRequest;
use App\Models\Professor;
use App\Services\ProfessorService;

class ProfessorController extends Controller
{
    public function __construct(
        public ProfessorService $service
    )
    {}

    public function index(){
        $response = $this->service->index();

        return response()->json([
            "type" => "Get Professors",
            "data" => $response
        ], 200);
    }

    public function create(StoreProfessorRequest $request){
        $data = ProfessorStoreDTO::fromRequest($request);

        $response = $this->service->store($data);

        return response()->json([
            "type" => "Professor Storage",
            "message" => "Professeur creé avec succès",
            "data" => [
                "professor" => $response
            ]
        ], 201);
    }

    public function update(Professor $professor, UpdateProfessorRequest $request){
        $data = ProfessorUpdateDTO::fromRequest($request);

        $response = $this->service->update($professor, $data);

        return response()->json([
            "type" => "Professor Update",
            "message" => "Informations du professeur modifiées avec succès",
            "data" => [
                "professor" => $response
            ]
        ], 200);
    }

    public function delete(Professor $professor){
        $response = $this->service->destroy($professor);

        if($response) return response()->json([
            "type" => "Professor Delete",
            "message" => "Professeur supprimé avec succès"
        ], 204);
        // The 204 status for NO CONTENT
    }
}
