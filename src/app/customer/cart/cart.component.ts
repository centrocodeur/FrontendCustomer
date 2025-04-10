import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../services/customer.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {PlaceOrderComponent} from "../place-order/place-order.component";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cartItems: any[]= [];
  order: any;
  couponForm!: FormGroup;

  constructor(private customerService: CustomerService,
              private snackBar: MatSnackBar,
              private fb: FormBuilder,
              private dialog: MatDialog) {
  }

  ngOnInit() {

    this.couponForm= this.fb.group({
      code: [null, [Validators.required]]
    })
    this.getCart();
  }

  applyCoupon() {
    this.customerService.applyCoupon(this.couponForm.get(['code'])!.value).subscribe(res => {
      this.snackBar.open("Coupon Applied Successfully", 'Close', {
        duration: 5000
      });
      this.getCart();
    }, error => {
      this.snackBar.open(error.error, 'Close',{duration: 5000});
    })
  }

  getCart(){
    this.cartItems= [];
    this.customerService.getCartByUserId().subscribe(res=>{
      this.order = res;
      res.cartItems.forEach(element => {
        element.processedImg= 'data:image/jpeg;base64,' + element.returnedImg;
        this.cartItems.push(element)
      })
    })
  }

  increaseQuantity(ticketId:any){
    this.customerService.increaseTicketQuantity(ticketId).subscribe(res =>{
      this.snackBar.open('Ticket quantity increased.', 'Close', {duration:5000});
      this.getCart();
    })
  }

  decreaseQuantity(ticketId:any){
    this.customerService.decreaseTicketQuantity(ticketId).subscribe(res =>{
      this.snackBar.open('Product quantity decreased.', 'Close', {duration:5000});
      this.getCart();
    })
  }

  placeOder(){
    this.dialog.open(PlaceOrderComponent);

  }

}
