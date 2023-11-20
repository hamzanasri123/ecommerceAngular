import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    CartComponent,
    OrderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
