import { Component, OnInit } from "@angular/core";
import { PersonenService } from "src/app/services/personen.service";
import { Person } from "../../models/person";

@Component({
  selector: "app-person-add",
  templateUrl: "./person-add.component.html",
  styleUrls: ["./person-add.component.scss"],
})
export class PersonAddComponent implements OnInit {
  person: Person = {
    id: "",
    vorname: "",
    nachname: "",
    rolle: "",
    image: "",
  };

  constructor(private ps: PersonenService) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.person);
    if (
      this.person.vorname != "" &&
      this.person.nachname != "" &&
      this.person.rolle != ""
    ) {
      this.ps.addPerson(this.person);
      this.person.vorname = "";
      this.person.nachname = "";
      this.person.rolle = "";
      this.person.image = "";
    }
    console.log("person.id: " + this.person.id);
    if (this.person.id == "") {
      console.log("Update nach dem Add");
      this.ps.updatePerson(this.person);
    }
  }
}
