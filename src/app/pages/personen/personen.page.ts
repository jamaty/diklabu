import { Component, OnInit } from "@angular/core";
import { PersonenService } from "src/app/services/personen.service";
import { Person } from "../../models/person";

@Component({
  selector: "app-personen",
  templateUrl: "./personen.page.html",
  styleUrls: ["./personen.page.scss"],
})
export class PersonenPage implements OnInit {
  editState: boolean = false;
  personToEdit: Person;
  personen: Person[];
  person: Person = {
    id: "",
    vorname: "",
    nachname: "",
    rolle: "Eltern",
    image: "",
  };

  constructor(private ps: PersonenService) {}

  ngOnInit() {
    this.ps.getPersonen().subscribe((personen) => {
      this.personen = personen;
    });
  }

  onSubmit() {
    if (
      this.person.vorname != "" &&
      this.person.nachname != "" &&
      this.person.rolle != ""
    ) {
      this.ps.addPerson(this.person);
      this.person.vorname = "";
      this.person.nachname = "";
      this.person.rolle = "Eltern";
      this.person.image = "";
    }
  }

  editPerson(event, person: Person) {
    this.editState = true;
    this.personToEdit = person;
  }

  updatePerson(person: Person) {
    this.ps.updatePerson(person);
    this.clearState();
  }

  deletePerson(event, person: Person) {
    this.clearState();
    this.ps.deletePerson(person);
  }

  clearState() {
    this.editState = false;
    this.personToEdit = null;
  }
}
