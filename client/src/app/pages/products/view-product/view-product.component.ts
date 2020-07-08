import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private api: RestApiService, private displayError: NzNotificationService) { }
  product: any;
  productId = this.route.snapshot.paramMap.get('productId')

  ngOnInit(): void {
    this.getProductById()
  }

  // show product by id 
  getProductById(){
    this.api.getProductById(this.productId).subscribe(res => {
      this.product = res;
      this.product = this.product.result
      console.log(this.product)
    }),
    (err => {
      this.displayError.create(
        'err','Error', err.message
      )
    })
  }


}
