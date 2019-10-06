import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(contacts: any, searchInput?: any): any {
    // console.log("search pipe called", searchInput);
    if (!contacts) {
      return null;
    }
    if (!searchInput || searchInput === "") {
      return contacts;
    }

    return contacts.filter(contact => {
      return !contact.firstName.toLowerCase().search(searchInput.toLowerCase());
    });
  }
}
