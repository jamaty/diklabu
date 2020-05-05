import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
      url: 'folder/Posteingang',
      icon: 'mail'
    },
    {
      title: 'Kalender',
      url: 'folder/Kalender',
      icon: 'calendar'
    },
    {
      title: 'Anwesenheit',
      url: 'anwesenheit',
      icon: 'book'
    },
    {
      title: 'Krankmeldung',
      url: 'folder/Krankmeldung',
      icon: 'bandage'
    },
    {
      title: 'Schülermonitor',
      url: 'folder/Schülermonitor',
      icon: 'man'
    },
    {
      title: 'Arbeitsgemeinschaften',
      url: 'folder/Arbeitsgemeinschaften',
      icon: 'people'
    },
    {
      title: 'Klassensteckbriefe',
      url: 'klassensteckbrief',
      icon: 'albums'
    },
    {
      title: 'Personen',
      url: 'personen',
      icon: 'people'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
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
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
