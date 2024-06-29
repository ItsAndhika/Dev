<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    public function index()
    {
        $title = 'All Posts';
        if (request('category')) {
            $title = "All posts by " . Category::firstWhere('slug', request('category'))->slug . " category";
        }
        if (request('user')) {
            $title = "All posts by " . User::firstWhere('username', request('user'))->name;
        }
        return view('posts', [
            'title' => $title,
            'posts' => Post::latest()->with('category', 'user')->filter(request(["search", "category", "user"]))->paginate(7)
        ]);
    }

    public function post(Post $post)
    {
        return view('post', [
            'title' => 'Post Details',
            'post' => $post
        ]);
    }
}
