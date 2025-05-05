import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserStorageService} from "../../servicies/storage/user-storage.service";

//const BASIC_URL= "http://localhost:8080/";
//const BASIC_URL= "https://studiprojetbackend-production.up.railway.app/";
const BASIC_URL= "https://studi-jo-backend-production.up.railway.app/";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }


  getAllTickets(): Observable<any>{
    return  this.http.get(BASIC_URL+ 'api/customer/tickets', {
      headers: this.createAuthorizationHeaders(),
    })
  }


  getAllCompetitions(): Observable<any>{
    return  this.http.get(BASIC_URL+ 'api/customer/competitions', {
      headers: this.createAuthorizationHeaders(),
    })
  }

  getAllTicketsByName(name:any): Observable<any>{
    return  this.http.get(BASIC_URL+ `api/customer/search/${name}`, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  addToCart(ticketId:any): Observable<any>{
    const cartDto= {
      ticketId: ticketId,
      userId : UserStorageService.getUserId(),
    }
    return  this.http.post(BASIC_URL+ `api/customer/ticket_cart`, cartDto,{
      headers: this.createAuthorizationHeaders(),
    })
  }


  deleteFromCart(userId:any): Observable<any>{
    const cartDto= {
      //ticketId: ticketId,
      userId : UserStorageService.getUserId(),
    }
    return  this.http.delete(BASIC_URL+ `api/customer/ticket_cart/${userId}`, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  increaseTicketQuantity(ticketId:any): Observable<any>{
    const cartDto= {
      ticketId: ticketId,
      userId : UserStorageService.getUserId(),
    }
    return  this.http.post(BASIC_URL+ `api/customer/ticket/addition`, cartDto,{
      headers: this.createAuthorizationHeaders(),
    })
  }

  decreaseTicketQuantity(ticketId:any): Observable<any>{
    const cartDto= {
      ticketId: ticketId,
      userId : UserStorageService.getUserId(),
    }
    return  this.http.post(BASIC_URL+ `api/customer/ticket/deduction`, cartDto,{
      headers: this.createAuthorizationHeaders(),
    })
  }

  getCartByUserId(): Observable<any>{
    const userId = UserStorageService.getUserId()

    return  this.http.get(BASIC_URL+ `api/customer/ticket_cart/${userId}`,{
      headers: this.createAuthorizationHeaders(),
    })
  }

  applyCoupon(code: any): Observable<any>{
    const userId = UserStorageService.getUserId()

    return  this.http.get(BASIC_URL+ `api/customer/coupon/${userId}/${code}`,{
      headers: this.createAuthorizationHeaders(),
    })
  }

  placeOrder(orderDto:any ): Observable<any>{
    orderDto.userId = UserStorageService.getUserId()

    return  this.http.post(BASIC_URL+ `api/customer/ticket/placeOrder`, orderDto,{
      headers: this.createAuthorizationHeaders(),
    })
  }



  getOrdersByUserId( ): Observable<any>{
    const userId = UserStorageService.getUserId()

    return  this.http.get(BASIC_URL+ `api/customer/myOrders/${userId}`,{
      headers: this.createAuthorizationHeaders(),
    })
  }

  getOrderedTickets(orderId:number): Observable<any>{
    return  this.http.get(BASIC_URL+ `api/customer/ordered-tickets/${orderId}`, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  giveReview(reviewDto: any): Observable<any>{
    return  this.http.post(BASIC_URL+ `api/customer/review`, reviewDto, {
      headers: this.createAuthorizationHeaders(),
    })
  }


  getTicketDetailById(ticketId: number): Observable<any>{
    return  this.http.get(BASIC_URL+ `api/customer/ticket/${ticketId}`, {
      headers: this.createAuthorizationHeaders(),
    })

  }

  addTicketToWishlist(wishlistDto: any): Observable<any>{
    return  this.http.post(BASIC_URL+ `api/customer/wishlist`, wishlistDto, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  getWishlistByUserId(): Observable<any>{
    const userId= UserStorageService.getUserId();
    return  this.http.get(BASIC_URL+ `api/customer/wishlist/${userId}`,  {
      headers: this.createAuthorizationHeaders(),
    })
  }


  private createAuthorizationHeaders(): HttpHeaders{
    return new HttpHeaders().set('Authorization', 'Bearer '+ UserStorageService.getToken())
  }
}
