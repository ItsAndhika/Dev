<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function create() {
        return view('users.register');
    }

    public function store() {
        $validatedFormFields = request()->validate([
            'name' => 'required|min:3',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed|min:6'
        ]);

        $validatedFormFields['password'] = bcrypt($validatedFormFields['password']);

        $user = User::create($validatedFormFields);

        auth()->login($user);
        
        return redirect('/')->with('message', 'Successfully created a new user!');
    }

    public function login() {
        return view('users.login');
    }

    public function logout() {
        auth()->logout();

        request()->session()->invalidate();
        request()->session()->regenerateToken();

        return redirect('/')->with('message', "You've been logged out!");
    }

    public function authenticate() {
        $validatedFormFields = request()->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if(auth()->attempt($validatedFormFields)) {
            request()->session()->regenerate();
            return redirect('/')->with('message', "You're now logged in!");
        }

        return back()->withErrors(['email' => 'Invalid email or password'])->onlyInput('email');
    }
}
