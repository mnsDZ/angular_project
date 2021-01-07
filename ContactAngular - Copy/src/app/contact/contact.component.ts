import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { stringify } from 'querystring';
import { InterfaceContacts } from '../interface-contacts';
import { PhoneBookService } from '../phone-book/phone-book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  @Input() name: string;
  contact: InterfaceContacts;

  @Output() contactEvent = new EventEmitter<string>();
  constructor(private phonebookservice: PhoneBookService, private router: Router) {

  }

  ngOnInit(): void {
    this.contact = this.phonebookservice.getContact(this.name);
  }

  showDetails() {
    this.router.navigate(['/details', { name: this.contact.name }]);
  }
  delete() {
    this.phonebookservice.deleteTodo(this.contact);
  }

  selectFile(event) {

    if (!event.target.files[0] || event.target.files[0].length == 0) {
      alert('You must select an image');
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      alert('Only images are supported');
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.contact.image = reader.result;
    }
  }

}
