import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../customer/services/customer.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DataService} from "../servicies/data.service";
import {UserStorageService} from "../servicies/storage/user-storage.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  images = [
    {name: 'carousel_1.png'},
    {name: 'carousel_2.png'},
    {name: 'carousel_3.png'},
    {name: 'carousel_4.png'},

  ];

  competitions: any;
  searchTicketForm!: FormGroup;
  isCustomerLoggedIn: boolean = UserStorageService.isCustomerLoggedIn();

  constructor(private dataService: DataService) {
  }


  ngOnInit(): void {
    this.competitions= this.dataService.listeCompetitions;
    this.isCustomerLoggedIn =UserStorageService.isCustomerLoggedIn();

  }




}
