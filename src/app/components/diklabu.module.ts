import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent, CommonModule, FormsModule, IonicModule],
})
export class DiklabuModule {}
