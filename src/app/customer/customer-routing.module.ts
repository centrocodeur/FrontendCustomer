import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CartComponent} from "./cart/cart.component";
import {MyOrdersComponent} from "./my-orders/my-orders.component";
import {ViewTicketDetailComponent} from "./view-ticket-detail/view-ticket-detail.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'cart', component: CartComponent},
  {path: 'myOrders', component: MyOrdersComponent},
  {path: 'ticket/:ticketId', component: ViewTicketDetailComponent},
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
