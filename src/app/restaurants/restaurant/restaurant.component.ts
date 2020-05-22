import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from './resturant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
})
export class RestaurantComponent implements OnInit {
  @Input() restaurant: Restaurant;
  constructor() {}

  ngOnInit() {}
}
