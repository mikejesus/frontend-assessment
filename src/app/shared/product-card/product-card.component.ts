import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() imgSource: string | undefined;
  @Input() productName: string | undefined;
  @Input() productPrice: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
