import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management/product-management.component';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  declarations: [
    ProductManagementComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
