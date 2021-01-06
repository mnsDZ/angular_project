import { Component, OnInit } from '@angular/core';
import { InterfaceContacts } from '../interface-contacts';
import {PhoneBookService} from '../phone-book/phone-book.service';
import {ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // @Input() set name(value: string){
  //   this.contactdetail = this.phonebookservice.getContact(value)
  // }
  contactdetail: InterfaceContacts;

  constructor(private phonebookservice: PhoneBookService,private route:ActivatedRoute) {
  
  }

 ngOnInit(): void {
  const name= this.route.snapshot.paramMap.get('name');
   this.contactdetail=this.phonebookservice.getContact(name);
 } 

}
