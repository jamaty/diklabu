import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Person } from '../models/person'

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  personenCollection: AngularFirestoreCollection<Person>;
  personen: Observable<Person[]>;

  constructor(public fs: AngularFirestore) {
    this.personen = this.fs.collection('Personen').valueChanges();
  }

  getPersonen(){
    return this.personen;
  }
}