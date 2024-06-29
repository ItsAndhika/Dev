<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function index() {
        return Inertia::render('Auth/Login');
    }

    public function authenticate() {
        $credentials = request()->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if(auth()->attempt($credentials)) {
            request()->session()->regenerate();
            return redirect()->intended();
        }

        return back()->withErrors([
            'email' => 'Invalid credentials'
        ])->onlyInput('email');
    }
}
