import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  phone = {
    'brand':'Xiaomi',
    'model': 'redmi 6',
    'price': 10000,
    'stock': 4,
    'image': 'assets/img/redmi6.jpg'

  };
  constructor() { }

  ngOnInit(): void {
  }

}
