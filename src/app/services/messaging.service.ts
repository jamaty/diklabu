import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFireFunctions } from '@angular/fire/functions';
import { ToastController } from '@ionic/angular';
import { tap } from 'rxjs/operators';

// Fixing temp bug
import * as app from 'firebase';
const _messaging = app.messaging();
_messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
_messaging.onMessage = _messaging.onMessage.bind(_messaging);

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  token;

  constructor(
    private afm: AngularFireMessaging,
    private aff: AngularFireFunctions,
    private toastController: ToastController
  ) {
    this.listen();
  }

  async makeToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      position: 'bottom',
      buttons: [
        {
          text: 'Dismiss',
          role: 'cancel',
          handler: () => {
            toast.dismiss();
          },
        },
      ],
    });
    toast.present();
  }

  getPermission() {
    return this.afm.requestToken.subscribe((token) => (this.token = token));
  }

  listen() {
    return this.afm.messages.pipe(
      tap((msg) => {
        // TODO in app notifications do not work for some reason
        console.log(msg);
        const body: any = (msg as any).notification.body;
        this.makeToast(body);
      })
    );
  }

  sub(topic) {
    this.aff
      .httpsCallable('subscribeToTopic')({ topic, token: this.token })
      .pipe(tap((_) => this.makeToast(`subscribed to ${topic}`)))
      .subscribe();
  }

  unsub(topic) {
    this.aff
      .httpsCallable('unsubscribeFromTopic')({ topic, token: this.token })
      .pipe(tap((_) => this.makeToast(`unsubscribed from ${topic}`)))
      .subscribe();
  }
}
