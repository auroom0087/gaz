<?php

namespace App\Http\Controllers\Auth;
use App\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MeController extends Controller
{

    public function __construct() {
        $this->middleware(['auth:api']);
    }

    public function __invoke(Request $request) {
        
        dd("hello");
        // $user = User::where('email', $request->email)->first()->get();
        // dd($user);
        // return response()->json([
        //     'last_name' => $user->last_name,
        //     'name' => $user->name,
        //     'second_name' => $user->second_name,
        //     'birth_date' => $user->birth_date,
        //     'position' => $user->position,
        //     'rank' =>  $user->rank,
        //     'department' => $user->department,
        //     'email' => $user->email
        // ]);
    }
}
