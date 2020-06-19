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
        dd($request->only('email'));
        // $user = User::where('email', $request->email)->first()->get();

        // return response()->json(compact('user'));
    }
}
