import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { DetailsComponent } from './components/details/details.component';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContainerComponent } from './components/container/container.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'contacts', component: ContactListComponent
  },
  {
    path: 'contacts-details/:id', component: DetailsComponent
  },
  {
    path: 'home', component: ContainerComponent
  },
  {
    path: 'addcontact', component: AddContactComponent
  },
  {
    path: 'edit-contact/:id', component: EditContactComponent
  },
  {
    path: '**', component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
