<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\JWTAuth;
use Illuminate\Http\Request;
use App\User;

class SignInController extends Controller
{
    public function __invoke(Request $request) {
        
        // dd($request);

        if (!$token = auth()->attempt($request->only('email', 'password'))) {
            return response("Попытка не удалась!", 401);
        }
        
        $user = User::where('email', $request->input('email'))->first()->get();
        dd($user->toArray()[0]->id);
        // $user_dep = User::find($user->id)->department;

        // dd('user_dep');

        // return response()->json(compact('token', 'user'));
    }

}
