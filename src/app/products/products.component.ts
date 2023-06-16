import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {

  public products : Array<Product> = [];
  public keyword : string = "";
  constructor(private ps:ProductService) {
  }

  ngOnInit() {
      this.getProducts();
    }
   getProducts(){
      this.ps.getProduct(1,3)
        .subscribe({ next : data => {this.products = data },
          error : err => { console.log("err");
          }})
     }
    handleCheckedProduct(product: Product) {
      this.ps.checkProduct(product)
        .subscribe(
        { next : updatedProduct => {  product.checked = !product.checked;},
           error : err => {console.log("wrong answwer")}
        }
      )

    }

    handleDeleteProduct(product: Product) {
      if(confirm("voulez vous vraiment suppeirmer ?"))
       this.ps.DeleteProduct(product)
         .subscribe({
           next : value => {
             this.getProducts();
           }
         })
    }

    searchProduct() {
      this.ps.searchProduct(this.keyword)
        .subscribe({
         next:value => {this.products = value}
        })
    }
}
