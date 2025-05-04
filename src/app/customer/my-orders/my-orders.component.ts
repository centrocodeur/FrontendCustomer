import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css'
})
export class MyOrdersComponent implements OnInit{


  myOrders: any;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.getMyOrders();
  }

  getMyOrders(){
    this.customerService.getOrdersByUserId().subscribe(res =>{
      this.myOrders= res;
      console.log(this.myOrders)
      //console.log(this.myOrders[0])
    })
  }

}
