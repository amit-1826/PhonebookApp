import { Component, OnInit } from "@angular/core";
import { Contact } from "src/app/contact";
import { PhonebookService } from "src/app/services/phonebook.service";
import { Router, ActivatedRoute } from "@angular/router";

const sweetalert = window["swal"];

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  contact: Contact = new Contact();
  id: number;

  constructor(
    private phonebookService: PhonebookService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRouter.params.subscribe(paramsData => {
      this.phonebookService
        .getContactDetails(paramsData["id"])
        .subscribe(data => (this.contact = data));
    });
  }

  deleteContact() {
    sweetalert({
      title: "You are about to delete contact",
      text: "Please confirm",
      icon: 'warning',
      buttons: [
        {
          text: "Yes, I am sure",
          visible: true,
          value: true
        },
        {
          text: "Cancel",
          visible: true,
          value: false
        }
      ]
    }).then(result => {
      if (result === true) {
        this.phonebookService.deleteContact(this.contact.id).subscribe(data => {
          this.router.navigate(["/contacts"]);
        });
      }
    });
  }
}
