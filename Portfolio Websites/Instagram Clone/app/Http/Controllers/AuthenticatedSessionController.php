<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class AuthenticatedSessionController extends Controller
{
    public function index() {
        return Inertia::render('Dashboard', [
            'username' => auth()->user()->username
        ]);
    }

    public function destroy() {
        auth()->logout();
        request()->session()->invalidate();
        request()->session()->regenerateToken();
        return redirect('/');
    }
}
