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

    this.personen = this.personenCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as Person;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );

    this.anwesenheitenCollection = this.fs.collection("anwesenheiten", (ref) =>
      ref.orderBy("erfasstAm", "desc").limit(10)
    );

    // next
    // const lastAnwesenheit = this.anwesenheiten[1];
    // this.anwesenheitenCollection = this.fs.collection("anwesenheiten", (ref) =>
    //   ref.orderBy("erfasstAm", "desc").limit(10).startAfter(lastAnwesenheit)
    // );

    this.anwesenheiten = this.anwesenheitenCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as Anwesenheit;
          data.id = a.payload.doc.id;
          data.erfasstAm = new Date(data.erfasstAm);
          return data;
        });
      })
    );

    this.msgCollection = this.fs.collection("messages");
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

  getAnwesenheiten() {
    return this.anwesenheiten;
  }

  fetchMoreAnwesenheiten() {
    this.anwesenheiten;
  }

  addAnwesenheit(anwesenheit: Anwesenheit) {
    this.anwesenheitenCollection.add(anwesenheit);
  }

  updateAnwesenheit(anwesenheit: Anwesenheit) {
    this.anwesenheitDoc = this.fs.doc("Anwesenheiten/" + anwesenheit.id);
    this.anwesenheitDoc.update(anwesenheit);
  }

  deleteAnwesenheit(anwesenheit: Anwesenheit) {
    this.anwesenheitDoc = this.fs.doc("Anwesenheiten/" + anwesenheit.id);
    this.anwesenheitDoc.delete();
  }

  addMessage(msg: Message) {
    this.msgCollection.add(msg);
  }
}
