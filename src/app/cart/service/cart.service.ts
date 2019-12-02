import { Injectable } from '@angular/core';
import { Product } from '../../product/product';
import { CartItem } from '../cart-item';
import { CART_ITEM_LIST } from '../cart-item-list';


@Injectable()
export class CartService {

  cardItems: CartItem[]; //bu sayede cartItem değişkenini kullanarak CartItem[] altında bulunan özelliklere ulaşacağız.
  constructor() { }
  //Buraya bir ürün gönderip ekleme işlemi için product parametresi tanımlayıp bu product nesnemizden gelecek
  addToCart(product: Product): void{
    var addedItem = CART_ITEM_LIST.find(t => t.product.productId == product.productId);
    if (addedItem) {  // aynı urun sepette varsa adedını 1 arttır
      addedItem.quantity += 1;
    }
    else { //aynı urun sepette yoksa yenı bır urun olustur ve degerını 1 ata
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CART_ITEM_LIST.push(cartItem);
    }
  }

  // sepetteki elemanları listelemek için CART_ITEM_LIST i geri döndür
  list(): CartItem[]{
    return CART_ITEM_LIST;
  }
  //sepetten ürün silebilmesi için removeFromCart adında metot tanımladım
  removeFormCart(product: Product){
    var addedItem = CART_ITEM_LIST.find(s=>s.product.productId == product.productId);
    //silme işlemi yapabilmek için addItem’ın kaçıncı sırada olduğunu buluyoruz
    // Bu nedenle ilk olarak addItem’ın indexini bulup indexNo değişkenine atama yapalım
    var IndexNo = CART_ITEM_LIST.indexOf(addedItem);
    //eger indexNo yoksa -1 yani işlem yapma varsa bastığımızı sil
    if(IndexNo != -1) {
      CART_ITEM_LIST.splice(IndexNo, 1);
    }
  }

}
