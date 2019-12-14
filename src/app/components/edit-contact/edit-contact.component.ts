import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PhonebookService } from "src/app/services/phonebook.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-edit-contact",
  templateUrl: "./edit-contact.component.html",
  styleUrls: ["./edit-contact.component.css"]
})
export class EditContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: PhonebookService
  ) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      id: new FormControl(),
      firstName: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      lastName: new FormControl(),

      gender: new FormControl(),
      email: new FormControl("", [Validators.email, Validators.required]),
      phone: new FormControl("", [Validators.required]),
      city: new FormControl(),
      state: new FormControl(),
      country: new FormControl(),
      picture: new FormControl("../../assets/male.png"),
      dob: new FormControl()
    });
    this.route.params.subscribe(params => {
      this.service.getContactDetails(params.id).subscribe(contact => {
        this.contactForm.setValue({ ...contact });
      });
    });
  }

  saveChanges() {
    debugger;
    /* this.service.updateContact(this.contactForm.value).subscribe(updated => {
      this.router.navigate(["/contacts-details", updated.id]);
    }); */
  }
}
