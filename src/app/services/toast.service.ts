import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class ToastService {
  private toast: any;

  constructor(public toastController: ToastController) {}

  async showToast(message: string) {
    this.toast = await this.toastController.create({
      message,
      animated: true,
      duration: 2000,
      position: "bottom",
      buttons: [
        {
          text: "Okay",
          role: "cancel",
          handler: () => {
            this.toast.dismiss();
          },
        },
      ],
    });
    this.toast.present();
  }

  hideToast() {
    this.toast.dismiss();
  }
}
