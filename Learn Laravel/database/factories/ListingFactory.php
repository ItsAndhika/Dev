<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Listing>
 */
class ListingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => rand(1, 3),
            'title' => fake()->sentence(rand(2, 3)),
            'tags' => "Laravel, API, Backend, Vue, Inertia",
            'company' => fake()->company(),
            'location' => fake()->address(),
            'email' => fake()->unique()->companyEmail(),
            'website' => fake()->unique()->url(),
            'description' => fake()->paragraph(5)
        ];
    }
}
