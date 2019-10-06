import { Component, OnInit } from "@angular/core";
import { PhonebookService } from "src/app/services/phonebook.service";
import { Contact } from "src/app/contact";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"]
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  pageNumber: number = 1;
  searchInput: string = "";
  constructor(private phonebookService: PhonebookService) {}

  ngOnInit() {
    this.phonebookService
      .getAllContacts()
      .subscribe(response => (this.contacts = response));
  }

  loadMore() {
    this.pageNumber++;
    this.phonebookService
      .getAllContacts(this.pageNumber)
      .subscribe(response => (this.contacts = [...this.contacts, ...response]));
  }
}
