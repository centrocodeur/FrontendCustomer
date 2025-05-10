import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import { CartComponent } from './cart/cart.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import { ViewTicketDetailComponent } from './view-ticket-detail/view-ticket-detail.component';
import {
  MatCell,
  MatCellDef, MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import { FooterComponent } from './footer/footer.component';
import { MarqueComponent } from './marque/marque.component';
import { HeaderComponent } from './header/header.component';
import {MatOption, MatSelect} from "@angular/material/select";
import { ConditionsComponent } from './conditions/conditions.component';
import { CoukiesComponent } from './coukies/coukies.component';
import { ContactComponent } from './contact/contact.component';
import { MentionsComponent } from './mentions/mentions.component';


@NgModule({
    declarations: [
        CustomerComponent,
        DashboardComponent,
        CartComponent,
        PlaceOrderComponent,
        MyOrdersComponent,
        ViewTicketDetailComponent,
        FooterComponent,
        MarqueComponent,
        HeaderComponent,
        ConditionsComponent,
        CoukiesComponent,
        ContactComponent,
        MentionsComponent
    ],
    exports: [
        FooterComponent,
        MarqueComponent
    ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatFormField,
    MatIcon,
    ReactiveFormsModule,
    MatCard,
    MatDivider,
    MatCardTitle,
    MatCardContent,
    MatInput,
    MatButton,
    MatLabel,
    MatError,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatColumnDef,
    MatSelect,
    MatOption
  ]
})
export class CustomerModule { }
