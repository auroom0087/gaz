<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\JWTAuth;
use Illuminate\Http\Request;

class SignInController extends Controller
{
    public function __invoke(Request $request) {
        if (!$token = auth()->attempt($request->only('email', 'password'))) {
            return response("Попытка не удалась!", 401);
        }
        
        return response()->json(compact('token'));
    }

}
