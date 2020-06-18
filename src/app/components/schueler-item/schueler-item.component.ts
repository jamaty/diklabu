import { Component, OnInit, Input } from "@angular/core";
import { PersonenService } from "src/app/services/personen.service";
import {AnwesenheitenService  } from "src/app/services/anwesenheiten.service";
import { Person } from "../../models/person";
import { Anwesenheit } from "../../models/anwesenheit";
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase2 from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

@Component({
  selector: "app-schueler-item",
  templateUrl: "./schueler-item.component.html",
  styleUrls: ["./schueler-item.component.scss"],
})
export class SchuelerItemComponent implements OnInit {
  @Input() personID = "";
  @Input() anwesenheitID="";
  @Input() anwesenheitMode="";
  anwesenheit: Anwesenheit[];

  schueler_all: Person[];
  schueler: Person = {
    id: "",
    vorname: "",
    nachname: "",
    rolle: "Schüler",
    image: "",
  };

  constructor(public fs: AngularFirestore, private personService: PersonenService, private anwesenheitService: AnwesenheitenService) {}

  ngOnInit() {
    this.personService.getPersonen().subscribe((personen) => {
      this.schueler_all = personen;
    });
  }


  anwesenheitChange(personID,anwesenheitID,anwesenheitMode)
  {
    var ref = this.fs.collection("anwesenheiten").doc( anwesenheitID);
    
    if(anwesenheitMode==="fehlend")
    {
      ref.update({
        fehlendListe:firebase2.firestore.FieldValue.arrayUnion(personID)
      });
    }
    else
    {
      ref.update({
        fehlendListe:firebase2.firestore.FieldValue.arrayRemove(personID)
      });
    }
    
   
  }
}
