import { Component, OnInit } from '@angular/core';
import { InterfaceContacts } from '../interface-contacts';
import {PhoneBookService} from '../phone-book/phone-book.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts:InterfaceContacts[];
   
  constructor(private phonebookservice: PhoneBookService ) { }

  ngOnInit(): void {
    this.contacts=this.phonebookservice.getContacts()
  }

}
