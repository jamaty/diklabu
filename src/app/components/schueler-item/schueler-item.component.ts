import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService } from "src/app/services/database.service";
import { Person } from '../../models/person';

@Component({
  selector: 'app-schueler-item',
  templateUrl: './schueler-item.component.html',
  styleUrls: ['./schueler-item.component.scss'],
})
export class SchuelerItemComponent implements OnInit {
  @Input() personID = '';

  schueler_all : Person[];
  schueler: Person = {
    id: '',
    vorname: '',
    nachname: '',
    rolle: 'Schüler',
    image: ''
  }

  constructor(private personService : DatabaseService) { }

  ngOnInit() {
    this.personService.getPersonen().subscribe(personen => {
      this.schueler_all = personen;      
    });
  }
}
