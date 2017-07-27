"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var menu_component_1 = require("./menu.component");
var footer_component_1 = require("./footer.component");
var home_component_1 = require("./home/home.component");
var hotel_component_1 = require("./hotel/hotel.component");
var about_component_1 = require("./about/about.component");
var gallery_component_1 = require("./gallery/gallery.component");
var contact_component_1 = require("./contact/contact.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.CONST_ROUTING
        ],
        declarations: [
            app_component_1.AppComponent,
            menu_component_1.MenuComponent,
            home_component_1.HomeComponent,
            hotel_component_1.HotelComponent,
            about_component_1.AboutComponent,
            footer_component_1.FooterComponent,
            gallery_component_1.GalleryComponent,
            contact_component_1.ContactComponent
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map