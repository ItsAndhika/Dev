@extends('templates.body')
@section('content')
    <h1 class="text-center">{{ $title }}</h1>

    <div class="row d-flex justify-content-center">
        <div class="col-md-6 my-3">
            <form action="/posts">
                @if (request('category'))
                    <input type="hidden" name="category" value="{{ request('category') }}">
                @endif
                @if (request('user'))
                    <input type="hidden" name="user" value="{{ request('user') }}">
                @endif
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search here..." name="search" value="{{ request('search') }}">
                    <button class="btn btn-danger" type="submit">Search</button>
                </div>
            </form>
        </div>
    </div>

    @if ($posts->count())
        <div class="row">
            <div class="col">
                <div class="card mb-3 text-center">
                    <img src="../../../../../../../img/{{ $posts[0]->category->name }}.avif" class="card-img-top" alt="{{ $posts[0]->category->name }}" width="1200" height="400">
                    <div class="card-body">
                        <h3 class="card-title"><a href="/posts/{{ $posts[0]->slug }}" class="text-decoration-none">{{ $posts[0]->title }}</a></h3>
                        <p class="card-text">{{ $posts[0]->excerpt }}</p>
                        <p>By <a href="/posts?user={{ $posts[0]->user->username }}" class="text-decoration-none">{{ $posts[0]->user->name }}</a> in <a href="/posts?category={{ $posts[0]->category->slug }}" class="text-decoration-none">{{ $posts[0]->category->name }}</a> at {{ $posts[0]->created_at->diffForHumans() }}</p>
                        <a href="/posts/{{ $posts[0]->slug }}" class="text-decoration-none btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
        @foreach ($posts->skip(1) as $post)
            <div class="col-md-4 mb-3">
                <div class="card shadow text-center">
                    <img src="../../../../../img/{{ $post->category->name }}.avif" class="card-img-top" alt="..." width="200" height="
                    200">
                    <div class="card-body">
                        <h5 class="card-title"><a href="/posts/{{ $post->slug }}" class="text-decoration-none">{{ $post->title }}</a></h5>
                        <p class="card-text">By <a href="/posts?user={{ $post->user->username }}" class="text-decoration-none">{{ $post->user->name }}</a> in <a href="/posts?category={{ $post->category->slug }}" class="text-decoration-none">{{ $post->category->name }}</a></p>
                        <p class="card-text">{{ $post->excerpt }}</p>
                        <p>{{ $post->created_at->diffForHumans() }}</p>
                        <a href="/posts/{{ $post->slug }}" class="btn btn-primary">Read More</a>
                    </div>
                </div> 
            </div>
            @endforeach
        </div>
        <div class="w-100 p-5">
            {{ $posts->links() }}
        </div>
    @else 
        <p class="text-center fs-4">No posts found!</p>
    @endif
@endsection