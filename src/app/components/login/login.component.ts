import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { FirebaseUISignInSuccessWithAuthResult } from "firebaseui-angular";
import { FirebaseUISignInFailure } from "firebaseui-angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-2",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
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
