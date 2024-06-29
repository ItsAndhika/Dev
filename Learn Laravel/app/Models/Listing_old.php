<?php

namespace App\Models;

class Listing
{
    public static function getAll()
    {
        return [
            [
                'id' => 1,
                'title' => 'First Listing',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, facilis labore! Quasi sapiente excepturi at ipsam doloremque iusto illo voluptatem?'
            ],
            [
                'id' => 2,
                'title' => 'Second Listing',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, facilis labore! Quasi sapiente excepturi at ipsam doloremque iusto illo voluptatem?'
            ],
        ];
    }

    public static function getById($id)
    {
        $listings = self::getAll();

        foreach ($listings as $listing) {
            if ($listing['id'] == $id) {
                return $listing;
            }
        }
    }
}
