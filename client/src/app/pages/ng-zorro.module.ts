import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './products/all-products/all-products.component';
import { ViewProductComponent } from './products/view-product/view-product.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    ViewProductComponent
  ],
  exports: [
    AllProductsComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NgZorroModule { }
