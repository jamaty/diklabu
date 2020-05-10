import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//import { AuthService } from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Posteingang',
      url: 'posteingang',
      icon: 'mail'
    },
    {
      title: 'Kalender',
      url: 'kalender',
      icon: 'calendar'
    },
    {
      title: 'Anwesenheit',
      url: 'anwesenheit',
      icon: 'book'
    },
    {
      title: 'Krankmeldung',
      url: 'krankmeldung',
      icon: 'bandage'
    },
    {
      title: 'Schülermonitor',
      url: 'schuelermonitor',
      icon: 'man'
    },
    {
      title: 'Arbeitsgemeinschaften',
      url: 'arbeitsgemeinschaften',
      icon: 'people'
    },
    {
      title: 'Klassenübersicht',
      url: 'klassen',
      icon: 'albums'
    },
    {
      title: 'Benutzerverwaltung',
      url: 'benutzerverwaltung',
      icon: 'cog'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    //public auth: AuthService
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
    const path = window.location.pathname;
    if (path !== undefined) {
      // TODO
      this.selectedIndex = this.appPages.findIndex(page => page.url.toLowerCase() === path.toLowerCase());
    }
  }
}
