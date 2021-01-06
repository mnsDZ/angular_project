import { Injectable } from '@angular/core';
import { InterfaceContacts } from '../interface-contacts';
import { ContactComponent } from '../contact/contact.component'

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {

  private contacts: InterfaceContacts[] = [
    { name: "Coccinelle", phone: "000000000", image: "assets/images/coccinelle.jpg" },
    { name: "Jujube", phone: "1111111111", image: "assets/images/jujube.jpg" },
    { name: "newton", phone: "2222222222", image: "assets/images/newton.jpg" }
  ]
  // contact: InterfaceContacts[];

  constructor() { }

  getContact(name) {
    return this.contacts.find(contact => contact.name === name);
  }

  getContacts() {
    return this.contacts;
  }

  addContact() {
    this.contacts.push({ name: '', phone: '', image: 'assets/images/placeholder.png' });
  }
  deleteTodo(name){
    this.contacts.filter(contact => contact.name !== name);
  }


}
