@extends('templates.body')
@section('content')
    <h1>All Users</h1>
    <div class="row">
        <div class="col">
            @foreach ($users as $user)
                <ul style="list-style: none; padding: 0;">
                    <li><h2><a href="/posts?user={{ $user->name }}" class="text-decoration-none">{{ $user->name }}</a></h2></li>
                </ul>
            @endforeach
        </div>
    </div>
@endsection