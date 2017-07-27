"use strict";
var router_1 = require("@angular/router");
var hotel_component_1 = require("./hotel/hotel.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var gallery_component_1 = require("./gallery/gallery.component");
var contact_component_1 = require("./contact/contact.component");
var MAINMENU_ROUTES = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'hotel', component: hotel_component_1.HotelComponent },
    { path: 'gallery', component: gallery_component_1.GalleryComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
];
exports.CONST_ROUTING = router_1.RouterModule.forRoot(MAINMENU_ROUTES);
//# sourceMappingURL=app.routing.js.map