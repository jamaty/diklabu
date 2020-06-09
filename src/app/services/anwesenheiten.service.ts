import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFirestoreCollection } from "@angular/fire/firestore";
import { AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Anwesenheit } from "../models/anwesenheit";

@Injectable({
  providedIn: "root",
})
export class AnwesenheitenService {
  anwesenheitenCollection: AngularFirestoreCollection<Anwesenheit>;
  anwesenheitDoc: AngularFirestoreDocument<Anwesenheit>;
  anwesenheiten: Observable<Anwesenheit[]>;

  anwesenheitFehlendCollection: AngularFirestoreCollection<Anwesenheit>;
  anwesenheitFehlend: Observable<Anwesenheit[]>;

  constructor(public fs: AngularFirestore) {
    this.anwesenheitenCollection = this.fs.collection("anwesenheiten", (ref) =>
      ref.orderBy("erfasstAm", "desc")
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
  }
  getAnwesenheiten() {
    return this.anwesenheiten;
  }

  addAnwesenheit(anwesenheit: Anwesenheit) {
    this.anwesenheitenCollection.add(anwesenheit);
  }

  updateAnwesenheit(anwesenheit: Anwesenheit) {
    this.anwesenheitDoc = this.fs.doc("anwesenheiten/" + anwesenheit.id);
    this.anwesenheitDoc.update(anwesenheit);
  }

  deleteAnwesenheit(anwesenheit: Anwesenheit) {
    this.anwesenheitDoc = this.fs.doc("anwesenheiten/" + anwesenheit.id);
    this.anwesenheitDoc.delete();
  }

  fetchMoreAnwesenheiten() {
    this.anwesenheiten;
  }

  getAnwesenheitFehlend(anwesenheitID: Anwesenheit) {
    this.anwesenheitFehlendCollection = this.fs.collection(
      "anwesenheiten/" + anwesenheitID + "/fehlend",
      (ref) => ref
    );
    this.anwesenheitFehlend = this.anwesenheitFehlendCollection
      .snapshotChanges()
      .pipe(
        map((changes) => {
          return changes.map((a) => {
            const data = a.payload.doc.data() as Anwesenheit;
            data.id = a.payload.doc.id;
            return data;
          });
        })
      );

    return this.anwesenheitFehlend;
  }
}
