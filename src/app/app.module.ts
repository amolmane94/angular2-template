import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { MenuComponent } from './menu.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { CONST_ROUTING } from './app.routing';

@NgModule({
  imports:      [
                  BrowserModule,
                  FormsModule,
                  HttpModule,
                  CONST_ROUTING
                ],
  declarations: [
                  AppComponent,
                  MenuComponent,
                  HomeComponent,
                  HotelComponent,
                  AboutComponent,
                  FooterComponent,
                  GalleryComponent,
                  ContactComponent
                ],
  providers: [],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
