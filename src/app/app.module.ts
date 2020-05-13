import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { firebaseConfig } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireFunctionsModule, REGION } from '@angular/fire/functions';
import {
  AngularFireAnalyticsModule,
  UserTrackingService,
  ScreenTrackingService,
} from '@angular/fire/analytics';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireMessagingModule,
    AngularFireFunctionsModule,
    AngularFireAnalyticsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserTrackingService,
    ScreenTrackingService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: REGION, useValue: 'europe-west3' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
