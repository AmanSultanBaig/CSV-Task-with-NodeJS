import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './pages/products/all-products/all-products.component';
import { ViewProductComponent } from './pages/products/view-product/view-product.component';


const routes: Routes = [
  { path: '', redirectTo: 'all-products', pathMatch: 'full' },
  { path: 'all-products', component: AllProductsComponent },
  { path: 'view-product/:productId', component: ViewProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
