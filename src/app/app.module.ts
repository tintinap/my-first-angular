import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        TopBarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        RouterModule.forRoot(
          [
            {
                path: '',
                component: ProductListComponent
            },
            {
                path: '/nod',
                component: TopBarComponent
            }
          ]
       )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
