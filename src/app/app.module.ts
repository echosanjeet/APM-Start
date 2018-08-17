import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from '../products/product-list.component';

import  { FormsModule }  from  '@angular/forms';

import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe'

import { StarComponent } from './shared/star.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
