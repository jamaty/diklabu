import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { firebaseConfig } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireMessagingModule } from "@angular/fire/messaging";
import { AngularFireFunctionsModule, REGION } from "@angular/fire/functions";
import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
import { UserTrackingService } from "@angular/fire/analytics";
import { ScreenTrackingService } from "@angular/fire/analytics";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { FirebaseUIModule, firebase, firebaseui } from "firebaseui-angular";
import { AnwesenheitDetailsPageModule } from "./pages/anwesenheit-details/anwesenheit-details.module";
export const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: "redirect",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: ["public_profile", "email", "user_likes", "user_friends"],
      customParameters: {
        auth_type: "reauthenticate",
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    },
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
  ],
  tosUrl: "<your-tos-link>",
  privacyPolicyUrl: "<your-privacyPolicyUrl-link>",
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    AngularFireFunctionsModule,
    AngularFireMessagingModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    AnwesenheitDetailsPageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserTrackingService,
    ScreenTrackingService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: REGION, useValue: "europe-west3" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
