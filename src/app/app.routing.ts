import { Routes, RouterModule } from '@angular/router';
import { HotelComponent } from "./hotel/hotel.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContactComponent } from "./contact/contact.component";
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'hotel', component: HotelComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'contact', component: ContactComponent},

];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
