import { Component, OnInit } from "@angular/core";
import { PersonenService } from "src/app/services/personen.service";
import { Person } from "../../models/person";

@Component({
  selector: "app-list-schueler",
  templateUrl: "./list-schueler.component.html",
  styleUrls: ["./list-schueler.component.scss"],
})
export class ListSchuelerComponent implements OnInit {
  schueler_all: Person[];
  schueler: Person = {
    id: "",
    vorname: "",
    nachname: "",
    rolle: "Schüler",
    image: "",
  };

  constructor(private ps: PersonenService) {}

  ngOnInit() {
    this.ps.getPersonen().subscribe((personen) => {
      this.schueler_all = personen;
    });
  }
}
