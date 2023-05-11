import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactSchema } from 'src/models/contactSchema';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact:ContactSchema={}
  groups:any=[]

  constructor(private editActivatedRoute:ActivatedRoute, private api:ApiService, private editRouter:Router){

  }
  ngOnInit(): void {
    this.editActivatedRoute.params.subscribe({
      next:(pathparameter:any) =>{
        const {id} = pathparameter
        console.log(id);
        //
        this.api.viewContact(id).subscribe({
          next:(Response:any)=>{
            console.log(Response);
            this.contact = Response
          }
        })
        
      }
    })

    //get all groups
    this.api.getGroups().subscribe({
      next:(allGroups:any)=>{
        this.groups = allGroups
        console.log(this.groups);
      }
    })
  }

  //edit contact
  editContact(id:any){
    //api call to edit contact
    this.api.editContact(id,this.contact).subscribe({
      next:(response:any)=>{
        //navigate all contact
        this.editRouter.navigateByUrl("")
      }
    })
  }
  

}
