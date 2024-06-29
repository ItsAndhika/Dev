<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function index() {
        return Inertia::render('Auth/Register');
    }

    public function store() {
        $credentials = request()->validate([
            'email' => 'required|email|unique:users,email',
            'full_name' => 'required|min:3',
            'username' => 'required|min:3',
            'password' => 'required|confirmed'
        ]);

        $credentials['password'] = Hash::make($credentials['password']);

        $user = User::create($credentials);

        auth()->login($user);

        return redirect('/');
    }
}
