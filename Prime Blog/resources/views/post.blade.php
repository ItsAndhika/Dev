@extends('templates.body')
@section('content')
    <h1>{{ $post->title }}</h1>
    <img src="../../../../img/{{ $post->category->name }}.avif" alt="" width="500" height="300" class="my-2">
    {!! $post->body !!}
    <a href="/posts" class="text-decoration-none">&laquo; Back to posts</a>
    <br><br><br>
@endsection