import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { ProductCartService } from '../product-cart.service';
import { Product } from './product';//me lo recomienda el IDE, pero es suficiente con poner export en la interface

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  phones: Product[] = [//phones es un arreglo de Product--contiene product
    {//  primer elemento del arreglo
      //esta lista hardcodeada se llama Mock
      brand:'Xiaomi',
      model: 'redmi 6',
      price: 10000,
      stock: 4,
      image: 'assets/img/redmi6.jpg',
      description: 'Smartphone Android con pantalla HD+ de 5.45 pulgadas, procesador Helio P22 de ocho núcleos, 3GB de RAM y 32GB de almacenamiento o 4GB de RAM y 64GB de almacenamiento, cámara dual de 12 MP + 5 MP, lector de huellas y batería de 3000 mAh.',
      clearance: false,
      quantity: 0,
    },
    {
      brand:'Motorola',
      model: 'Moto G8',
      price: 27000,
      stock: 2,
      image: 'assets/img/motorola-moto-g8.jpg',
      description: 'El Motorola Moto G8 completa la octava generación de la serie Moto G con una pantalla HD+ de 6.4 pulgadas, un procesador Snapdragon 665 acompañado de 4GB de memoria RAM y 64GB de almacenamiento interno expandible, una cámara triple de 16 MP + 8 MP + 2 MP en su posterior, cámara frontal para selfies de 8 megapixels, batería de 4000 mAh, lector de huellas y corre Android 10.',
      clearance: true,
      quantity: 0,
    },
    {
      brand:'Xiaomi',
      model: 'redmi Note 8',
      price: 37000,
      stock: 0,
      image: 'assets/img/xiaomi-redmi-note-8.jpg',
      description: 'El Xiaomi Redmi Note 8 marca la octava generación de la serie Redmi Note, esta vez con una pantalla Full HD+ de 6.3 pulgadas y potenciado por un procesador Snapdragon 665 de ocho núcleos. Con opciones de 4GB de memoria RAM y 64GB de almacenamiento, 6GB de RAM y 64GB de almacenamiento o 6GB de RAM y 128GB de almacenamiento, el Redmi Note 8 cuenta con una cámara cuádruple en su posterior de 48 MP + 8 MP + 2 MP + 2 MP, y su cámara para selfies es de 13 megapixels',
      clearance: false,
      quantity: 0,
    },
  ];


  constructor(private cart: ProductCartService){
  }

  ngOnInit(): void {
  }

  addToCart(phone): void{
    this.cart.addToCart(phone);
    phone.stock -= phone.quantity;
    phone.quantity = 0;
  }

  maxReached(m: string){
    console.log(m);
  }
}
