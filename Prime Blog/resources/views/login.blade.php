@extends('templates.body')
@section('content')
    <h1 class="text-center">Login</h1>
    <div class="row mt-3">
        <div class="col-md-8 mx-auto">
            @if (Session::get('success'))
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    {{ Session::get('success') }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            @endif
            @if (Session::get('error'))
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    {{ Session::get('error') }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            @endif
            <form action="/login" method="post">
                @csrf
                <div class="input-group mb-3 has-validation">
                    <div class="form-floating @error('email') is-invalid @enderror">
                        <input type="email" class="form-control" id="email" name="email" placeholder="Email" required>
                        <label for="email" class="form-label @error('email') is-invalid @enderror">Email</label>
                        @error('email')
                        <div class="invalid-feedback">
                            {{ $message }}
                        </div>
                        @enderror
                    </div>
                </div>
                <div class="input-group mb-3 has-validation">
                    <div class="form-floating @error('password') is-invalid @enderror">
                        <input type="password" class="form-control" id="password" name="password" placeholder="Password" required>
                        <label for="password" class="form-label @error('password') is-invalid @enderror">Password</label>
                        @error('password')
                        <div class="invalid-feedback">
                            {{ $message }}
                        </div>
                        @enderror
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
                <p class="mt-4">Don't have an account? <a href="/register" class="text-decoration-none">register</a></p>
            </form>
        </div>
    </div>
@endsection