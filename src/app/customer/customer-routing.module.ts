import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CartComponent} from "./cart/cart.component";
import {MyOrdersComponent} from "./my-orders/my-orders.component";
import {ViewTicketDetailComponent} from "./view-ticket-detail/view-ticket-detail.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {ConditionsComponent} from "./conditions/conditions.component";
import {HomePageComponent} from "../home-page/home-page.component";
import {CoukiesComponent} from "./coukies/coukies.component";
import {ContactComponent} from "./contact/contact.component";
import {MentionsComponent} from "./mentions/mentions.component";

const routes: Routes = [
  { path: '',redirectTo:'/home', pathMatch:'full'}, // component: HomePageComponent},
  {path: 'home', title:'Accueil', component: HomePageComponent},
  { path: 'dashboard', title:'Tableau de bord', component: DashboardComponent },
  {path: 'cart',title:'mon panier', component: CartComponent},
  {path: 'my_orders', title:'Mes achats', component: MyOrdersComponent},
  {path: 'ticket/:ticketId',title:'Tickets', component: ViewTicketDetailComponent},
  {path: 'conditions',title:'Conditions', component: ConditionsComponent},
  {path: 'cookies',title:'cookies', component: CoukiesComponent},
  {path: 'contact',title:'contact', component: ContactComponent},
  {path: 'mentions',title:'mentions', component: MentionsComponent},
  {path: "**", title:'Pages introuvable', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
