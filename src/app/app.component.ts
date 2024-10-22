import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserStorageService} from "./servicies/storage/user-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'FrontendCustomer';



  isCustomerLoggedIn: boolean = UserStorageService.isCustomerLoggedIn();

  isAdminLoggedIn: boolean = UserStorageService.isAdminLoggedIn();

  constructor(private router: Router) {
  }

  ngOnInit():void{
    this.router.events.subscribe(event=>{
      this.isCustomerLoggedIn =UserStorageService.isCustomerLoggedIn();
      this.isAdminLoggedIn= UserStorageService.isAdminLoggedIn();
    })

  }

  logout(){
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
  }
}
