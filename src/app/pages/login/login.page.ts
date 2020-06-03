import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { FirebaseUISignInFailure } from "firebaseui-angular";
import { FirebaseUISignInSuccessWithAuthResult } from "firebaseui-angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {
    this.afAuth.authState.subscribe((d) => console.log(d));
  }

  logout() {
    this.afAuth.signOut();
  }

  successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
    console.log("successCallback", data);
    this.router.navigate(["page"]);
  }

  errorCallback(data: FirebaseUISignInFailure) {
    console.warn("errorCallback", data);
  }
}
