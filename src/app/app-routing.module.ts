import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  // all contacts : http://localhost:4200/
  {
    path:'', component:AllContactsComponent
  },
  // add-contact : http://localhost:4200/add-contact
  {
    path:'add-contact', component:AddContactComponent
  },
  // view contact : http://localhost:4200/view-contact/id
  {
    path:'view-contact/:id', component:ViewContactComponent
  },
  //edit-contact : http://localhost:4200/edit-contact/id
  {
    path:'edit-contact/:id', component:EditContactComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
