import { Component, OnInit, ViewChild } from "@angular/core";
import { DatabaseService } from "src/app/services/database.service";
import { Anwesenheit } from "src/app/models/anwesenheit";
import { IonInfiniteScroll } from "@ionic/angular";

@Component({
  selector: "app-anwesenheit",
  templateUrl: "./anwesenheit.page.html",
  styleUrls: ["./anwesenheit.page.scss"],
})
export class AnwesenheitPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true })
  infiniteScroll: IonInfiniteScroll;

  editState: boolean = false;
  anwesenheitToEdit: Anwesenheit;
  anwesenheiten: Anwesenheit[];
  anwesenheit: Anwesenheit = {
    id: "",
    erfasstAm: new Date(),
    klasse: "",
  };

  options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  constructor(private db: DatabaseService) {}

  ngOnInit() {
    this.db.getAnwesenheiten().subscribe((anwesenheiten) => {
      this.anwesenheiten = anwesenheiten;
    });
  }

  editAnwesenheit(anwesenheit: Anwesenheit) {
    this.editState = true;
    this.anwesenheitToEdit = anwesenheit;
  }

  updateAnwesenheit(anwesenheit: Anwesenheit) {
    this.db.updateAnwesenheit(anwesenheit);
    this.clearState();
  }

  deleteAnwesenheit(anwesenheit: Anwesenheit) {
    this.clearState();
    this.db.deleteAnwesenheit(anwesenheit);
  }

  clearState() {
    this.editState = false;
    this.anwesenheitToEdit = null;
  }

  loadData(event) {
    setTimeout(() => {
      console.log("Done");
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      //if (data.length == 1000) {
      //  event.target.disabled = true;
      //}
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  viewAnwesenheit() {}
}
