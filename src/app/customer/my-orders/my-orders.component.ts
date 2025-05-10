import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../services/customer.service";
import {Router} from "@angular/router";
import {UserStorageService} from "../../servicies/storage/user-storage.service";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css'
})
export class MyOrdersComponent implements OnInit{


  myOrders: any;

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit() {
    this.getMyOrders();
    this.autoLogout();
  }

  getMyOrders(){
    this.customerService.getOrdersByUserId().subscribe(res =>{
      this.myOrders= res;
      console.log(this.myOrders)
      //console.log(this.myOrders[0])
    })
  }

  logout(){
    UserStorageService.signOut();
    // this.router.navigateByUrl('login');
    this.router.navigateByUrl('customer/dashboard');
  }
  autoLogout(){
    window.setTimeout(()=>{
      this.logout()
    },1000*60*10)
  }


}
