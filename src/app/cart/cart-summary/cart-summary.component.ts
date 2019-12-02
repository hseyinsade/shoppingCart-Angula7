import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from '../service/cart.service';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit, DoCheck {

  constructor( private cartService : CartService) { }

  totalCartItem: number;  //ürün sayısı için
  totalCartItemPrice: number;  //sepetteki ürünlerin toplam fiyatı
  cartItem: CartItem[];  // ürünlerin ismini koymak için

  ngOnInit() {
    this.cartItem = this.cartService.list(); //arrayimize cartService listesini çektik
  }
  ngDoCheck() {
    this.totalCartItem = this.cartService.list().reduce((a,b)=>a+b.quantity,0);
    this.totalCartItemPrice= this.cartService.list().reduce((a,b)=>a+b.quantity*b.product.unitPrice,0);
      }
    }
