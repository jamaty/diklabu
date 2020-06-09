import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AnwesenheitenService } from "src/app/services/anwesenheiten.service";
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
    private as: AnwesenheitenService,
    private ts: ToastService,
    private mc: ModalController
  ) {}

  ngOnInit() {
    this.as.getAnwesenheiten().subscribe((anwesenheiten) => {
      this.anwesenheiten = anwesenheiten;
    });

    this.as
      .getAnwesenheitFehlend(this.anwesenheitID)
      .subscribe((anwesenheitFehlend) => {
        this.anwesenheitFehlend = anwesenheitFehlend;
      });
  }

  closeModal() {
    this.mc.dismiss();
  }
}
