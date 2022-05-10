import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productFrom:FormGroup;

  constructor() {
    this.productFrom = new FormGroup({
      'productName' : new FormControl(''),
      'productId' : new FormControl(''),
      'productType' : new FormControl(''),
      'productMrp' : new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  postData(){
    console.log(this.productFrom.value)

  }

}
