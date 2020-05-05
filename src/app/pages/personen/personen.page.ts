import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person'

@Component({
  selector: 'app-personen',
  templateUrl: './personen.page.html',
  styleUrls: ['./personen.page.scss'],
})
export class PersonenPage implements OnInit {
  personen : Person[];

  constructor( private personService : PersonService) { }

  ngOnInit() {
    this.personService.getPersonen().subscribe(personen => {
      this.personen = personen;
    });
  }

}
