import { Component } from '@angular/core';
import {UserStorageService} from "../../servicies/storage/user-storage.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CustomerService} from "../services/customer.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-ticket-detail',
  templateUrl: './view-ticket-detail.component.html',
  styleUrl: './view-ticket-detail.component.css'
})
export class ViewTicketDetailComponent {


  ticketId: number= this.activatedRoute.snapshot.params["ticketId"];

  ticket:any;

  FAQS: any[]= [];
  reviews : any[]= [];
  constructor(private snackBar: MatSnackBar,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getTicketDetailById();
  }

  getTicketDetailById(){
    this.customerService.getTicketDetailById(this.ticketId).subscribe(res=>{
      this.ticket= res.ticketDto;
      this.ticket.processedImg= 'data:image/png;base64,'+ res.productDto.byteImg;

      this.FAQS= res.faqDtoList;

      res.reviewDtoList.forEach(element=>{
        element.processedImg= 'data:image/png;base64,'+ element.returnedImg;
        this.reviews.push(element);
      });
    })
  }

  addToWishlist(){
    const wishlistDto= {
      ticketId: this.ticketId,
      userId: UserStorageService.getUserId()
    }
    this.customerService.addTicketToWishlist(wishlistDto).subscribe(res =>{
      if (res.id != null){
        this.snackBar.open('Ticket Added to wishlist Successfully', 'Close',{duration:5000});
      } else {
        this.snackBar.open("Already in wishlist", 'ERROR', {duration:5000});
      }
    })
  }

}
