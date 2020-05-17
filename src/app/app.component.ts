import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";

//import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Login",
      url: "login",
      icon: "lock-closed",
    },
    {
      title: "Posteingang",
      url: "posteingang",
      icon: "mail",
    },
    {
      title: "Kalender",
      url: "kalender",
      icon: "calendar",
    },
    {
      title: "Anwesenheit",
      url: "anwesenheit",
      icon: "book",
    },
    {
      title: "Krankmeldung",
      url: "krankmeldung",
      icon: "bandage",
    },
    {
      title: "Schülermonitor",
      url: "schuelermonitor",
      icon: "man",
    },
    {
      title: "Arbeitsgemeinschaften",
      url: "arbeitsgemeinschaften",
      icon: "people",
    },
    {
      title: "Klassenübersicht",
      url: "klassen",
      icon: "albums",
    },
    {
      title: "Benutzerverwaltung",
      url: "benutzerverwaltung",
      icon: "cog",
    },
  ];

  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar //public auth: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    let path = window.location.pathname.split("/")[1];
    if (path !== "") {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.url === path.toLowerCase()
      );
    }
  }
  /*
  successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
    console.log("successCallback", data);
    this.router.navigate(["page"]);
  }

  errorCallback(data: FirebaseUISignInFailure) {
    console.warn("errorCallback", data);
  }*/
}
