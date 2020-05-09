import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person';

@Component({
  selector: 'app-personen',
  templateUrl: './personen.page.html',
  styleUrls: ['./personen.page.scss'],
})
export class PersonenPage implements OnInit {
  editState: boolean = false;
  personToEdit: Person;
  personen : Person[];
  person: Person = {
    id: '',
    vorname: '',
    nachname: '',
    rolle: 'Eltern'
  }

  constructor( private personService : PersonService) { }

  ngOnInit() {
    this.personService.getPersonen().subscribe(personen => {
      this.personen = personen;
    });
  }

  onSubmit(){
    if(this.person.vorname != '' && this.person.nachname != '' && this.person.rolle != ''){
      this.personService.addPerson(this.person);
      this.person.vorname = '';
      this.person.nachname = '';
      this.person.rolle = 'Eltern';
    }
  }

  editPerson(event, person: Person){
    this.editState = true;
    this.personToEdit = person;
  }

  updatePerson(person: Person){
    this.personService.updatePerson(person);
    this.clearState();
  }

  deletePerson(event, person: Person){
    this.clearState();
    this.personService.deletePerson(person);
  }

  clearState(){
    this.editState = false;
    this.personToEdit = null;
  }
}
