import { Injectable } from '@angular/core';

export interface Contact {
  name: string;
  phone: string;
  address: string;
  email: string;
  website: string;
  notes: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {


  contacts: Contact[] = [
    {
      name: "Carla Greece",
      address: "Via Longhena, 132\n00010-Marcellina RM",
      email: "carlagreece@rhyta.com",
      notes: "",
      phone: "0374 6071072",
      website: "passwordpals.it"
    },
    {
      name: "Santa Ferri",
      address: "Via Enrico Fermi, 137\n10070-San Francesco Al Campo TO",
      email: "santaferri@armyspy.com",
      notes: "",
      phone: "0377 5365330",
      website: "golfclubmember.it"
    },
    {
      name: "Ignazio Boni",
      address: "Piazzetta Scalette Rubiani, 146\n84070-San Nicola Di Centola SA",
      email: "ignazioboni@teleworm.us",
      notes: "",
      phone: "0337 3988199",
      website: "ukbash.it"
    }
  ];

  constructor() { }

  find(id: number) {
    return this.contacts[id]
  }
}
