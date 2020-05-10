import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ArbeitsgemeinschaftenPageRoutingModule } from './arbeitsgemeinschaften-routing.module';
import { ArbeitsgemeinschaftenPage } from './arbeitsgemeinschaften.page';
import { DiklabuModule } from "../../components/diklabu.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiklabuModule,
    ArbeitsgemeinschaftenPageRoutingModule
  ],
  declarations: [ArbeitsgemeinschaftenPage]
})
export class ArbeitsgemeinschaftenPageModule {}
