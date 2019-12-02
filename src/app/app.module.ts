import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { CartService } from './cart/service/cart.service';
import { ProductFilterPipe } from './product/pipe/product-filter.pipe';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    CartSummaryComponent,
    ProductFilterPipe,
    CategoryComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ {
    // servisimiz için bu api sabit o yuzden her yere aynı adresi yazmaktansa bu şekilde local nesne tanımlayıp kullanacagım.
    provide : 'apiAdress',
    useValue : "http://northwindapi.azurewebsites.net/api"
    },
    CartService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
