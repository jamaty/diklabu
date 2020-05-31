import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { LoginPageRoutingModule } from "./login-routing.module";
import { LoginPage } from "./login.page";
import { LoginComponent } from "src/app/components/login/login.component";
import { DiklabuModule } from "src/app/components/diklabu.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    DiklabuModule,
  ],
  declarations: [LoginPage, LoginComponent],
})
export class LoginPageModule {}
