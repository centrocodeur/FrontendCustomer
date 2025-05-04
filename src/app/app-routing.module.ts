import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {LoginComponent} from "./login/login.component";
import {ValidationComponent} from "./validation/validation.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  //{path: " ", component: HomePageComponent},


  {path: " ", redirectTo:"/home", pathMatch :"full"},  // l'url racine
  {path: "home", title:"Accueil", component: HomePageComponent},
  {path: "login", component: LoginComponent},
  {path: "signup",component: SignUpComponent},
  {path: "validation",component: ValidationComponent},
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
