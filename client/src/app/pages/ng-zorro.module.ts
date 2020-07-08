import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './products/all-products/all-products.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { FormsModule } from '@angular/forms';

// ant design modules imports
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AppRoutingModule } from '../app-routing.module';


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
    CommonModule,
    FormsModule,
    AppRoutingModule,
    // ant design module imports
    NzNotificationModule,
    NzPaginationModule,
    NzInputModule,
    NzCardModule,
    NzButtonModule,
    NzTableModule,

  ]
})
export class NgZorroModule { }
