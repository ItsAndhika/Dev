@extends('templates.body')
@section('content')
    <h1>All Post Categories</h1>
    <div class="row">
        @foreach ($categories as $category)
            <div class="col-md-4">
                <a href="/posts?category={{ $category->slug }}">
                    <div class="card text-bg-dark shadow-lg">
                        <img src="../../../../../../../img/{{ $category->name }}.avif" class="card-img" alt="{{ $category->name }}" width="200" height="200">
                        <div class="card-img-overlay d-flex justify-center items-center">
                            <h5 class="card-title align-self-center mx-auto">{{ $category->name }}</h5>
                        </div>
                    </div>
                </a>
            </div>
        @endforeach 
    </div>
@endsection