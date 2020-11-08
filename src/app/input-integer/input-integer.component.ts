import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<String> = new EventEmitter<String>();

  ngOnInit(): void {
  }

  upQuantity(): void{
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else{
      this.maxReached.emit("se alcanzó el maximo");
    }
  }


  downQuantity(): void{
    if(this.quantity > 0 ){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeCuantity(event){
    let patronNumerico = /^[0-9]$/;
    if(!(patronNumerico.test(event.key)) || this.quantity > this.max ){
      this.quantity = 0;
      this.quantityChange.emit(this.quantity);
    }
  }
}
