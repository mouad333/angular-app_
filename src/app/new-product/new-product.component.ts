import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit{

  public productForm!: FormGroup;

  constructor(private fp:FormBuilder , private ps:ProductService) {
  }

  ngOnInit() {
     this.productForm = this.fp.group({
       name : this.fp.control('',[Validators.required]),
       price : this.fp.control(0,[Validators.required]),
       checked : this.fp.control(false,[Validators.required])
     });
  }

  saveproduct() {
     let product:Product = this.productForm.value;
     this.ps.saveProduct(product)
       .subscribe({
         next : value => {alert(JSON.stringify(value))},
         error : err => {console.log(err);}
       });
  }
}
