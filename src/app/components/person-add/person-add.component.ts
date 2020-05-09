import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service'
import { Person } from '../../models/person'

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.scss'],
})
export class PersonAddComponent implements OnInit {
  person: Person = {
    id: '',
    vorname: '',
    nachname: '',
    rolle: ''
  }

  constructor(private personService: PersonService) { }

  ngOnInit() {}

  onSubmit(){
    console.log(this.person)
    if(this.person.vorname != '' && this.person.nachname != '' && this.person.rolle != ''){
      this.personService.addPerson(this.person);
      this.person.vorname = '';
      this.person.nachname = '';
      this.person.rolle = '';
    }
  }
}
