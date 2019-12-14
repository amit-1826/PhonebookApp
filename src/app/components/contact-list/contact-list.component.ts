import { Component, OnInit } from "@angular/core";
import { PhonebookService } from "src/app/services/phonebook.service";
import { Contact } from "src/app/contact";

const $ = window["jQuery"];
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

    $(window).scroll(() => {
      let d = $(document);
      let w = $(window);
      if (w.scrollTop() + w.height() === d.height()) {
        this.loadMore();
      }
    });
  }

  loadMore() {
    this.pageNumber++;
    this.phonebookService
      .getAllContacts(this.pageNumber)
      .subscribe(response => (this.contacts = [...this.contacts, ...response]));
  }
}
