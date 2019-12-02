import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './service/product.service';
import { CartService } from '../cart/service/cart.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  products: Product[];  //servisten gelen değerlere ulaşmamız için oluşturduğumuz product array nesnesini product adında bir değişkene atadık.
  addedProduct: string;
  constructor( 
    private productService : ProductService,
    private cartService: CartService,
    private activatedRoute:ActivatedRoute,
    ) { }

  ngOnInit() {
    this.activatedRoute // Adım 4
    this.activatedRoute.params.subscribe(params=>{
      this.getProduct(params["seoUrl"]);
    })
  }
   getProduct(seoCategory:string){
     this.productService.getProducts(seoCategory).subscribe(Response =>{this.products = Response})
   }
   addToCart(product: Product){
     this.addedProduct = product.productName;
    //Burada oluşturduğumuz product nesnesini addToCard’atıyoruz. Yanı urunu gonderıp sepete ekleme ıslemı
    this.cartService.addToCart(product); 
   }
}
