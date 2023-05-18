import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  contacts;


  constructor(public contactsService: ContactsService) {
    this.contacts = contactsService.contacts;
  }
}
