import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { stringify } from 'querystring';
import {InterfaceContacts } from '../interface-contacts';
import {PhoneBookService} from '../phone-book/phone-book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  @Input() name: string;
  contact : InterfaceContacts;
 
  @Output () contactEvent = new EventEmitter<string>();
  constructor(private phonebookservice: PhoneBookService, private router:Router) {
  
   }

  ngOnInit(): void {
    console.log("name="+this.name);
    this.contact=this.phonebookservice.getContact(this.name);
  } 

  showDetails(){
    this.router.navigate(['/details',{ name: this.contact.name}]);
  }

}
