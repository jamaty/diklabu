import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import {AnwesenheitenService  } from "src/app/services/anwesenheiten.service";
import {PersonenService  } from "src/app/services/personen.service";
import { ToastService } from "src/app/services/toast.service";
import { Anwesenheit } from "src/app/models/anwesenheit";
import { Person } from "src/app/models/person";

@Component({
  selector: "app-anwesenheit-details",
  templateUrl: "./anwesenheit-details.page.html",
  styleUrls: ["./anwesenheit-details.page.scss"],
})
export class AnwesenheitDetailsPage implements OnInit {
  anwesenheitToEdit: Anwesenheit;
  anwesenheiten: Anwesenheit[];
  anwesenheitFehlend: Anwesenheit[];
  personenDetails: Person[];
  anwesenheit: Anwesenheit;
  anwesenheitID;

  constructor(
    private db: AnwesenheitenService,
    private ts: ToastService,
    public mc: ModalController,
    private person: PersonenService
  ) {}

  ngOnInit() {
    this.db
      .getAnwesenheitFehlend(this.anwesenheitID)
      .subscribe((anwesenheitFehlend) => {
        this.anwesenheitFehlend = anwesenheitFehlend;
        console.log(this.anwesenheitID);
        //this.anwesenheiten.sort(function (a, b) {
        //  return b.erfasstAm < a.erfasstAm ? -1 : 1;
        //});
      });

    this.person.getPersonen().subscribe((personenDetails) => {
      this.personenDetails = personenDetails;
    });

    this.db.getAnwesenheiten().subscribe((anwesenheiten) => {
      this.anwesenheiten = anwesenheiten;

      //this.anwesenheiten.sort(function (a, b) {
      //  return b.erfasstAm < a.erfasstAm ? -1 : 1;
      //});
    });
  }

  CloseModal() {
    this.mc.dismiss();
  }
}
