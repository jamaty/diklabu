import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { DatabaseService } from '../../services/database.service';
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
    rolle: 'Eltern',
    image: ''
  }

  constructor( private db : DatabaseService) { }

  ngOnInit() {
    this.db.getPersonen().subscribe(personen => {
      this.personen = personen;
    });
  }

  onSubmit(){
    if(this.person.vorname != '' && this.person.nachname != '' && this.person.rolle != ''){
      this.db.addPerson(this.person);
      this.person.vorname = '';
      this.person.nachname = '';
      this.person.rolle = 'Eltern';
      this.person.image = '';
    }
  }

  editPerson(event, person: Person){
    this.editState = true;
    this.personToEdit = person;
  }

  updatePerson(person: Person){
    this.db.updatePerson(person);
    this.clearState();
  }

  deletePerson(event, person: Person){
    this.clearState();
    this.db.deletePerson(person);
  }

  clearState(){
    this.editState = false;
    this.personToEdit = null;
  }
}
