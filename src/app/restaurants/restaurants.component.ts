import { Restaurant } from './restaurant/resturant.model';
import { RestaurantServices } from './restaurants.component.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];
  constructor(private restaurantServices: RestaurantServices) {}

  ngOnInit() {
    this.restaurantServices
      .restaurants()
      .subscribe((restaurant: Restaurant[]) => {
        this.restaurants = restaurant;
      });
  }
}
