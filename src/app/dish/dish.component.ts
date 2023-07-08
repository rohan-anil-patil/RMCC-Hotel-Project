import { Component, OnInit } from '@angular/core';

interface Dish {
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  category: string;
}

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css'],
})
export class DishComponent implements OnInit {
  searchQuery: string = '';
  searchResults: Dish[] = [];

  searchDishes() {
    if (this.searchQuery.trim() === '') {
      this.searchResults = [];
    } else {
      this.searchResults = this.dishes.filter((dish) =>
        dish.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }

  dishes: Dish[] = [
    {
      name: 'Dish 1',
      description: 'Description of Dish 1',
      image: 'assets/images/dish1.jpg',
      price: 100,
      quantity: 1,
      category: 'main',
    },
    {
      name: 'Dish 2',
      description: 'Description of Dish 2',
      image: 'assets/images/dish1.jpg',
      price: 800,
      quantity: 1,
      category: 'dessert',
    },
    {
      name: 'Dish 3',
      description: 'Description of Dish 3',
      image: 'assets/images/dish1.jpg',
      price: 500,
      quantity: 1,
      category: 'soup',
    },

    {
      name: 'Dish 4',
      description: 'Description of Dish 4',
      image: 'assets/images/dish1.jpg',
      price: 120,
      quantity: 1,
      category: 'dessert',
    },
  ];

  selectedCategory: string = 'all';
  filteredDishes: Dish[] = [];

  filterDishes(category: string) {
    this.selectedCategory = category;

    if (category === 'all') {
      this.filteredDishes = this.dishes;
    } else {
      this.filteredDishes = this.dishes.filter(
        (dish) => dish.category === category
      );
    }
  }

  selectDish(dish: Dish) {
    // Handle dish selection
  }

  buy(dish: Dish) {
    // Handle dish purchase
  }

  ngOnInit() {
    this.filteredDishes = this.dishes;
  }
}
