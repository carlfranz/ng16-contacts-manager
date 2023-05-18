import { Component, Input } from '@angular/core';
import { Contact, ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact: Contact | null = null;

  constructor(public contactsService: ContactsService) { }

  @Input()
  set id(contactId: string) {
    this.contact = this.contactsService.find(Number(contactId))
  }
}
