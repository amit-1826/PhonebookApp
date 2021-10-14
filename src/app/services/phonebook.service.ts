import { Injectable } from '@angular/core';
import { Contact } from '../contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://31.220.20.33:4300/contacts/';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor(private httpService: HttpClient) { }

  getContactDetails(id: number): Observable<any> {
    return this.httpService.get(baseUrl + id);
  }

  addNewContact(contact: Contact): Observable<any> {
    return this.httpService.post(baseUrl, contact);
  }

  updateContact(contact: Contact): Observable<any> {
    return this.httpService.put(baseUrl + contact.id, contact);
  }

  deleteContact(id: number): Observable<any> {
    return this.httpService.delete(baseUrl + id);
  }

  getAllContacts(pageNumber: number = 1): Observable<any> {
    const params = {
      '_page': '' + pageNumber
    }
    return this.httpService.get(baseUrl, { params });
  }
}
