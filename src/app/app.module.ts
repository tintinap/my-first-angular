import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        TopBarComponent,
        ProductAlertsComponent,
        ProductDetailComponent,
        CartComponent,
        ShippingComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
