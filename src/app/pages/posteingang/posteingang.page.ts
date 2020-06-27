import { Component, OnInit } from "@angular/core";
import { MessagingService } from "../../services/messaging.service";
import { Message } from "../../models/message";

@Component({
  selector: "app-posteingang",
  templateUrl: "./posteingang.page.html",
  styleUrls: ["./posteingang.page.scss"],
})
export class PosteingangPage implements OnInit {
  constructor(public ms: MessagingService) {}

  ngOnInit() {}

  randomMessage() {
    const nr: String = "" + Math.round(Math.random() * 100);
    const msg: Message = { original: "Sie haben das Los #" + nr };
    this.ms.addMessage(msg);
  }
}
