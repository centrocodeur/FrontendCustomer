import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CustomerService} from "../services/customer.service";
import {UserStorageService} from "../../servicies/storage/user-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  tickets: any[]= [];
  searchTicketForm!: FormGroup;

  constructor(private customerService: CustomerService,
              private fb: FormBuilder,
              private  snackBar: MatSnackBar,
              private router: Router) {
  }


  ngOnInit(): void {
    this.getAllTickets();
    this.searchTicketForm = this.fb.group({
      //title: [null, [Validators.required]],
      description: [null, [Validators.required]],
    })
  }
  getAllTickets(){
    this.tickets= [];
    this.customerService.getAllTickets().subscribe(res =>{
      res.forEach(element=>{
        element.processedImg= 'data:image/jpeg;base64,' + element.byteImg;
        this.tickets.push(element);
      })
    })
  }




  submitForm(){
    this.tickets= [];
    const description = this.searchTicketForm.get('description')!.value;
    this.customerService.getAllTicketsByDescription(description).subscribe(res =>{
      res.forEach(element=>{
        element.processedImg= 'data:image/jpeg;base64,' + element.byteImg;
        this.tickets.push(element);
      });
      console.log(this.tickets);
    })
  }

  addToCart(id: any){
    this.customerService.addToCart(id).subscribe(res=>{
      this.snackBar.open("Ticket ajouté au panier!","Fermer", {duration: 5000})
    })

  }
  logout(){
    UserStorageService.signOut();
    // this.router.navigateByUrl('login');
    this.router.navigateByUrl('home');
  }
  autoLogout(){
    window.setTimeout(()=>{
      this.logout()
    },1000*60*30)
  }


}
