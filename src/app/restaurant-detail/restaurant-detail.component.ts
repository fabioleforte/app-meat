import { Component, OnInit } from '@angular/core';
import { Restaurant } from './../restaurants/restaurant/resturant.model';
import { RestaurantServices } from './../restaurants/restaurants.component.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;
  constructor(
    private restaurantServices: RestaurantServices,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.restaurantServices
      .restaurantById(this.route.snapshot.params['id'])
      .subscribe((restaurant: Restaurant) => {
        this.restaurant = restaurant;
      });
  }
}
