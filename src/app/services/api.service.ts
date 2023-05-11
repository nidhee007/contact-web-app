import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { ContactSchema } from 'src/models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  deleteContact //api call : url = http://localhost:3000/contacts/ca1 req: get
    (id: any) {
      throw new Error('Method not implemented.');
  }

  BASE_URL = 'https://contact-web-app-aamb.onrender.com'

  constructor(private http: HttpClient) { }


  //handle error
  handleError(error:HttpErrorResponse) {
    let errorMsg:string=''
    errorMsg = `Error ${error.message}`
    // if(error.error){
    //   //client error
    //   errorMsg = `error: ${error.error.message}`
    // }
    // else{
    //   errorMsg = `status: ${error.status} \n Error: ${error.message}`
    // }
    return throwError(()=>errorMsg)
  }

  //get all contacts api
  getAllContacts() {
    //api call : url = http://localhost:3000/contacts req: get
    return this.http.get(`${this.BASE_URL}/contacts`)
  }

  // view a contact
  viewContact(id:any){
    //api call : url = http://localhost:3000/contacts/ca1 req: get 
    return this.http.get(`${this.BASE_URL}/contacts/${id}`)
  }

  //get a particular group
  getGroup(id: any){
    //api call : url = http://localhost:3000/groups/1 req: get
    return this.http.get(`${this.BASE_URL}/groups/${id}`)
  }

  //get all group
  getGroups(){
    //api call - http://localhost:3000/groups
    return this.http.get(`${this.BASE_URL}/groups`)
  }

  //add contact
  addContact(contact:ContactSchema){
    //api call
    return this.http.post(`${this.BASE_URL}/contacts`,contact)
  }

  //delete contact
  deletecontact(id:any){
    //api call server
    return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
  }

  //edit a content
  editContact(id:any,contact:ContactSchema){
    //api call
    return this.http.put(`${this.BASE_URL}/contacts/${id}`,contact)
  }
 
}