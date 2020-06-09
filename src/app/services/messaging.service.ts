import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFirestoreCollection } from "@angular/fire/firestore";
import { AngularFireMessaging } from "@angular/fire/messaging";
import { AngularFireFunctions } from "@angular/fire/functions";
import { ToastService } from "src/app/services/toast.service";
import { Message } from "../models/message";
import { tap } from "rxjs/operators";

// Fixing temp bug
import * as app from "firebase";
const _messaging = app.messaging();
_messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
_messaging.onMessage = _messaging.onMessage.bind(_messaging);

@Injectable({
  providedIn: "root",
})
export class MessagingService {
  msgCollection: AngularFirestoreCollection<Message>;
  token;

  constructor(
    private fs: AngularFirestore,
    private afm: AngularFireMessaging,
    private aff: AngularFireFunctions,
    private ts: ToastService
  ) {
    this.msgCollection = this.fs.collection("messages");
    this.listen();
  }

  addMessage(msg: Message) {
    this.msgCollection.add(msg);
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
        this.ts.showToast(body);
      })
    );
  }

  sub(topic) {
    this.aff
      .httpsCallable("subscribeToTopic")({ topic, token: this.token })
      .pipe(tap((_) => this.ts.showToast(`Subscribed to ${topic}`)))
      .subscribe();
  }

  unsub(topic) {
    this.aff
      .httpsCallable("unsubscribeFromTopic")({ topic, token: this.token })
      .pipe(tap((_) => this.ts.showToast(`Unsubscribed from ${topic}`)))
      .subscribe();
  }
}
