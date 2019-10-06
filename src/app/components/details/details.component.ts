import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contact';
import { PhonebookService } from 'src/app/services/phonebook.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',  
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  contact: Contact = new Contact();
  id: number;

  constructor(private phonebookService: PhonebookService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
               }

  ngOnInit() {
    this.activatedRouter.params.subscribe(paramsData => {
      this.phonebookService.getContactDetails(paramsData['id']).subscribe(data => this.contact = data);
    });
  }

  deleteContact() {
    if(!confirm('Are you sure you want to delete.?')) {
      return;
    }
    this.phonebookService.deleteContact(this.contact.id)
    .subscribe((data) => {
      this.router.navigate(['/contacts']);
    })
  }

}
