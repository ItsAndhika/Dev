<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;

class ListingController extends Controller
{
    public function index()
    {
        return view('listings.index', [
            'header' => 'Latest Listing',
            'listings' => Listing::latest()->filter(request(['tag', 'search']))->paginate(6)
        ]);
    }

    public function show(Listing $listing)
    {
        return view('listings.show', [
            'listing' => $listing
        ]);
    }

    public function create()
    {
        return view('listings.create');
    }

    public function store() {
        $validatedFormFields = request()->validate([
            'title' => 'required',
            'company' => 'required|unique:listings,company',
            'email' => 'required|email',
            'location' => 'required',
            'website' => 'required',
            'tags' => 'required',
            'description' => 'required'
        ]);

        if(request()->hasFile('logo')) {
            $validatedFormFields['logo'] = request()->file('logo')->store('logos', 'public');
        }

        $validatedFormFields['user_id'] = auth()->user()->id;

        Listing::create($validatedFormFields);

        return redirect('/')->with('message', 'Successfully created a new listing');
    }   

    public function edit(Listing $listing) {
        return view('listings.edit', [
            'listing' => $listing
        ]);
    }

    public function update(Listing $listing) {
        if($listing->user_id != auth()->id()) {
            abort(403, 'Unauthorized Action!');
        }

        $validatedFormFields = request()->validate([
            'title' => 'required',
            'company' => 'required',
            'email' => 'required|email',
            'location' => 'required',
            'website' => 'required',
            'tags' => 'required',
            'description' => 'required'
        ]);

        if(request()->hasFile('logo')) {
            $validatedFormFields['logo'] = request()->file('logo')->store('logos', 'public');
        }

        $listing->update($validatedFormFields);

        return redirect('/')->with('message', 'Successfully updated a listing');
    }
    
    public function destroy(Listing $listing) {
        if($listing->user_id != auth()->id()) {
            abort(403, 'Unauthorized Action!');
        }
        $listing->delete();
        return redirect('/')->with('message', 'Successfully deleted a listing');
    }

    public function manage() {
        return view('listings.manage', [
            'listings' => auth()->user()->listings
        ]);
    }
}
