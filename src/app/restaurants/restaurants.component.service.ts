import { ErrorHanler } from './../app.error-hadler';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MEAT_API } from './../app.api';
import { Restaurant } from './restaurant/resturant.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantServices {
  constructor(private http: Http) {}

  restaurants(): Observable<Restaurant[]> {
    return this.http
      .get(`${MEAT_API}/restaurants`)
      .map((response) => response.json())
      .catch(ErrorHanler.handlerError);
  }

  restaurantById(id: number): Observable<Restaurant> {
    return this.http
      .get(`${MEAT_API}/restaurants/${id}`)
      .map((response) => response.json())
      .catch(ErrorHanler.handlerError);
  }
  reviewsOfRestaurant(id: number): Observable<any> {
    return this.http
      .get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map((response) => response.json())
      .catch(ErrorHanler.handlerError);
  }
}
