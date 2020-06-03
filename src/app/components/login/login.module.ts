import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { FirebaseUIModule } from "firebaseui-angular";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";

const routes: Routes = [{ path: "login", component: LoginComponent }];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FirebaseUIModule.forFeature({ tosUrl: "MAIN_MODULE" }),
    RouterModule.forChild(routes),
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}
