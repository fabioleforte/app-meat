import { RestaurantServices } from './restaurants/restaurants.component.service';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { HearderComponent } from './hearder/hearder.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCardComponent } from './restaurant-detail/shopping-card/shopping-card.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCardComponent,
    MenuItemComponent,
    ReviewsComponent,
  ],
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(ROUTES)],
  providers: [RestaurantServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
