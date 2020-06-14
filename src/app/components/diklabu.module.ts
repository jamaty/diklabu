import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "./header/header.component";
import {SchuelerItemComponent} from "../components/schueler-item/schueler-item.component";

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [HeaderComponent, SchuelerItemComponent],
  exports: [SchuelerItemComponent, HeaderComponent, CommonModule, FormsModule, IonicModule],
})
export class DiklabuModule {}
