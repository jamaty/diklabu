import { Component, OnInit, Input } from "@angular/core";
import { PersonenService } from "src/app/services/personen.service";

@Component({
  selector: "app-schueler-item",
  templateUrl: "./schueler-item.component.html",
  styleUrls: ["./schueler-item.component.scss"],
})
export class SchuelerItemComponent implements OnInit {
  @Input() personID = "";

  schueler_data;

  constructor(private personService: PersonenService) {}

  ngOnInit() {
    this.personService.getPersonById(this.personID).subscribe(res => {
      this.schueler_data = res;
    });
  }

  update(event){
    console.log("Test"); 
  }
}
