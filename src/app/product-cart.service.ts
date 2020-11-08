import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {//codigo que maneja el carrito de productos

  private _cartList: Product[] = [];

  cartList: BehaviorSubject<Product[]> = new BehaviorSubject([]);

  constructor() { }

  addToCart(phone: Product) {
    if(phone.quantity > 0){//en caso de click a comprar con 0 en el input
      let item: Product = this._cartList.find((v1) => v1.model == phone.model);//busca un telefono en la lista segun la condicion y lo retorna
      if (!item){
        this._cartList.push({ ... phone});//se clona el phone e inserta el clone
        let itemAux: Product = this._cartList.find((v1) => v1.model == phone.model);
        itemAux.price = phone.price * phone.quantity;
        //console.log(this.cartList);
      }else{
        item.quantity += phone.quantity;
        item.price = phone.price * item.quantity;
      }
      this.cartList.next(this._cartList);//de este modo se "emite"
    }
  }




}
