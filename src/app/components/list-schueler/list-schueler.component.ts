import { Component, OnInit } from '@angular/core';

import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person';

@Component({
  selector: 'app-list-schueler',
  templateUrl: './list-schueler.component.html',
  styleUrls: ['./list-schueler.component.scss'],
})
export class ListSchuelerComponent implements OnInit {
  schueler_all : Person[];
  schueler: Person = {
    id: '',
    vorname: '',
    nachname: '',
    rolle: 'Schüler',
    image: ''
  }

  constructor(private personService : PersonService) { }

  ngOnInit() {
    this.personService.getPersonen().subscribe(personen => {
      this.schueler_all = personen;
    });
  }

}
