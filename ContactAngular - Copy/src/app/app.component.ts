import { Component, OnInit } from '@angular/core';
import { InterfaceContacts } from './interface-contacts';
import {PhoneBookService} from './phone-book/phone-book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  contactDetailsName : string;
  contacts: InterfaceContacts[];

  title = 'ContactAngular';

  constructor(private PBS: PhoneBookService){}

  ngOnInit (): void {
    this.contacts = this.PBS.getContacts()
  }

  onShowDetails (contactName: string) {
    this.contactDetailsName = contactName
  }
  
}
