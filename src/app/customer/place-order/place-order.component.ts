import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CustomerService} from "../services/customer.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Payment} from "../payment.model";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent implements OnInit{

  orderForm!: FormGroup;
  payments: string [] = ['CARTE_VISA','CARTE_CREDIT','MASTERCARD'];
  description= "Billet des jeux Olympiques Paris 2024";

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private customerService: CustomerService,
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.orderForm= this.fb.group({
      payment: [null, [Validators.required]],
      orderDescription: [this.description],
    })
  }

  placeOrder(){
    this.customerService.placeOrder(this.orderForm.value).subscribe(res=>{
      if(res.id!= null){
        this.snackBar.open("Votre billet électronique vous été envoyé dans votre boîte mail", "Fermer", {duration:5000})
        this.router.navigateByUrl("/customer/my_orders");
        this.closeForm();

      }else {
        this.snackBar.open("Une erreur s'est produit", "Fermer", {duration:5000})
      }
    })
  }
  closeForm(){
    this.dialog.closeAll();
  }


}
