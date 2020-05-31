import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFirestoreCollection } from "@angular/fire/firestore";
import { AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Person } from "../models/person";
import { Message } from "../models/message";
import { Anwesenheit } from "../models/anwesenheit";

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  personenCollection: AngularFirestoreCollection<Person>;
  personDoc: AngularFirestoreDocument<Person>;
  personen: Observable<Person[]>;

  anwesenheitenCollection: AngularFirestoreCollection<Anwesenheit>;
  anwesenheitDoc: AngularFirestoreDocument<Anwesenheit>;
  anwesenheiten: Observable<Anwesenheit[]>;

  msgCollection: AngularFirestoreCollection<Message>;

  constructor(public fs: AngularFirestore) {
    this.personenCollection = this.fs.collection("Personen", (ref) =>
      ref.orderBy("vorname", "asc")
    );

    this.msgCollection = this.fs.collection("messages");

    this.personen = this.personenCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as Person;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getPersonen() {
    return this.personen;
  }

  addPerson(person: Person) {
    this.personenCollection.add(person);
  }

  updatePerson(person: Person) {
    this.personDoc = this.fs.doc("Personen/" + person.id);
    this.personDoc.update(person);
  }

  deletePerson(person: Person) {
    this.personDoc = this.fs.doc("Personen/" + person.id);
    this.personDoc.delete();
  }

  addMessage(msg: Message) {
    this.msgCollection.add(msg);
  }
}
