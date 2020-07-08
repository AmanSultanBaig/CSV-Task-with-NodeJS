import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { NzNotificationService, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  Products: any = [];
  searchProduct
  constructor(private api: RestApiService, private displayError: NzNotificationService) { }

  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };


  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.api.getAllProducts().subscribe(res => {
      this.Products = res;
      this.Products = this.Products.result
      console.log(this.Products)
    }),
      (err => {
        this.displayError.create(
          'error', 'Error', err.message
        )
      })
  }

  searchByName() {
    if (this.searchProduct == "") {
      return this.getProducts()
    } else {
      this.Products = this.Products.filter(res => {
        return res.name.toLowerCase().match(this.searchProduct.toLowerCase())
      })
    }
  }

  resetSearchBox(){
    this.searchProduct = "";
    return this.getProducts();
  }

}
