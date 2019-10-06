import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contact';
import { PhonebookService } from 'src/app/services/phonebook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact: Contact;
  constructor(private service: PhonebookService,
    private router: Router) {
    this.contact = new Contact();
   }

  ngOnInit() {
  }

  addContact() {
    this.service.addNewContact(this.contact).subscribe(contact => {
      console.log("Added contact id: ", contact.id);
      this.router.navigate(['/contacts-details', contact.id]);
    })
  }

}
