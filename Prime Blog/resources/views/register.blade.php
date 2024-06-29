@extends('templates.body')
@section('content')
    <h1 class="text-center">Register</h1>
    <div class="row mt-3">
        <div class="col-md-8 mx-auto">
            <form action="/register" method="post">
                @csrf
                <div class="input-group mb-3 has-validation">
                    <div class="form-floating @error('name') is-invalid @enderror">
                        <input type="text" class="form-control" id="name" name="name" placeholder="Name" required autofocus>
                        <label for="name" class="form-label @error('name') is-invalid @enderror">Name</label>
                        @error('name')
                        <div class="invalid-feedback">
                            {{ $message }}
                        </div>
                        @enderror
                    </div>
                </div>
                <div class="input-group mb-3 has-validation">
                    <div class="form-floating @error('username') is-invalid @enderror">
                        <input type="text" class="form-control" id="username" name="username" placeholder="Username" required>
                        <label for="username" class="form-label @error('username') is-invalid @enderror">Username</label>
                        @error('username')
                        <div class="invalid-feedback">
                            {{ $message }}
                        </div>
                        @enderror
                    </div>
                </div>
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
                <button type="submit" class="btn btn-primary">Register</button>
                <p class="mt-4">Already have an account? <a href="/login" class="text-decoration-none">login</a></p>
            </form>
        </div>
    </div>
@endsection