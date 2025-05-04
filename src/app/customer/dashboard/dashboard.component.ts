import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CustomerService} from "../services/customer.service";

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
              private  snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
    this.getAllTickets();
    this.searchTicketForm = this.fb.group({
      title: [null, [Validators.required]]
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
    const title = this.searchTicketForm.get('title')!.value;
    this.customerService.getAllTicketsByName(title).subscribe(res =>{
      res.forEach(element=>{
        element.processedImg= 'data:image/jpeg;base64,' + element.byteImg;
        this.tickets.push(element);
      });
      console.log(this.tickets);
    })
  }

  addToCart(id: any){
    this.customerService.addToCart(id).subscribe(res=>{
      this.snackBar.open("OK!","Fermer", {duration: 5000})
    })

  }


}
