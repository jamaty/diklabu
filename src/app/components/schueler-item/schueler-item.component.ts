import { Component, OnInit, Input } from "@angular/core";
import { PersonenService } from "src/app/services/personen.service";
<<<<<<< HEAD
import {AnwesenheitenService  } from "src/app/services/anwesenheiten.service";
import { Person } from "../../models/person";
import { Anwesenheit } from "../../models/anwesenheit";
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase2 from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
=======
>>>>>>> develop

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

  schueler_data;

  constructor(public fs: AngularFirestore, private personService: PersonenService, private anwesenheitService: AnwesenheitenService) {}

  ngOnInit() {
    this.personService.getPersonById(this.personID).subscribe(res => {
      this.schueler_data = res;
    });
  }

  update(event){
    console.log("Test"); 
  }
}
