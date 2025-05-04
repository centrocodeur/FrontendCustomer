import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CartComponent} from "./cart/cart.component";
import {MyOrdersComponent} from "./my-orders/my-orders.component";
import {ViewTicketDetailComponent} from "./view-ticket-detail/view-ticket-detail.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {ConditionsComponent} from "./conditions/conditions.component";

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'dashboard', title:'Tableau de bord', component: DashboardComponent },
  {path: 'cart',title:'mon panier', component: CartComponent},
  {path: 'my_orders', title:'Mes achats', component: MyOrdersComponent},
  {path: 'ticket/:ticketId',title:'Tickets', component: ViewTicketDetailComponent},
  {path: 'conditions',title:'Conditions', component: ConditionsComponent},
  {path: "**", title:'Pages introuvable', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
