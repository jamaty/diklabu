import { Component, OnInit, ViewChild } from "@angular/core";
import {
  IonInfiniteScroll,
  AlertController,
  IonItemSliding,
  ModalController,
} from "@ionic/angular";
import { DatabaseService } from "src/app/services/database.service";
import { ToastService } from "src/app/services/toast.service";
import { Anwesenheit } from "src/app/models/anwesenheit";
import { AnwesenheitDetailsPage } from "../anwesenheit-details/anwesenheit-details.page";

@Component({
  selector: "app-anwesenheit",
  templateUrl: "./anwesenheit.page.html",
  styleUrls: ["./anwesenheit.page.scss"],
})
export class AnwesenheitPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true })
  infiniteScroll: IonInfiniteScroll;

  editState: boolean = false;
  filterMode: boolean = false;
  searchMode: boolean = false;

  anwesenheitToEdit: Anwesenheit;
  anwesenheiten: Anwesenheit[];
  anwesenheit: Anwesenheit;

  dateShort = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  dateLong = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  constructor(
    private db: DatabaseService,
    private ts: ToastService,
    private ac: AlertController,
    public mc: ModalController
  ) {}

  async OpenModal(anwesenheit?: Anwesenheit) {
    const modal = await this.mc.create({
      component: AnwesenheitDetailsPage,
      componentProps: {
        anwesenheitID: anwesenheit.id,
      },
    });
    return await modal.present();
  }

  ngOnInit() {
    this.db.getAnwesenheiten().subscribe((anwesenheiten) => {
      this.anwesenheiten = anwesenheiten;
      //this.anwesenheiten.sort(function (a, b) {
      //  return b.erfasstAm < a.erfasstAm ? -1 : 1;
      //});
    });
  }

  async viewAnwesenheit(anwesenheit: Anwesenheit) {
    this.ts.showToast(`Anwesenheitsliste mit ID ${anwesenheit.id} anzeigen`);
    // const modal = await this.mc.create({
    //   component: ModalPage,
    //   cssClass: "my-custom-class",
    // });
    // return await modal.present();
  }

  editAnwesenheit(slidingItem: IonItemSliding, anwesenheit: Anwesenheit) {
    this.editState = true;
    this.anwesenheitToEdit = anwesenheit;
    this.ts.showToast(`Anwesenheitsliste mit ID ${anwesenheit.id} ändern`);
    slidingItem.close();
  }

  updateAnwesenheit(anwesenheit: Anwesenheit) {
    this.db.updateAnwesenheit(anwesenheit);
    this.clearState();
  }

  async deleteAnwesenheit(anwesenheit: Anwesenheit) {
    const alert = await this.ac.create({
      header: "Löschen bestätigen",
      message: `Sind Sie sicher, dass Sie die Anwesenheitsliste vom ${anwesenheit.erfasstAm.toLocaleString(
        "de-DE",
        this.dateShort
      )} endgültig löschen wollen?`,
      buttons: [
        {
          text: "Bestätigen",
          handler: () => {
            this.clearState();
            this.db.deleteAnwesenheit(anwesenheit);
            alert.dismiss();
          },
        },
        {
          text: "Abbrechen",
          handler: () => {
            alert.dismiss();
          },
        },
      ],
    });

    await alert.present();
  }

  clearState() {
    this.editState = false;
    this.anwesenheitToEdit = null;
  }

  loadData(event) {
    // TODO
    this.db.fetchMoreAnwesenheiten();

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

  doRefresh(event) {
    // TODO
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
