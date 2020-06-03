import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { KlassensteckbriefPageRoutingModule } from './klassensteckbrief-routing.module';
import { KlassensteckbriefPage } from './klassensteckbrief.page';
import { DiklabuModule } from "../../components/diklabu.module";
import { KlassenkarteComponent } from '../../components/klassenkarte/klassenkarte.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiklabuModule,
    KlassensteckbriefPageRoutingModule
  ],
  declarations: [KlassensteckbriefPage, KlassenkarteComponent]
})
export class KlassensteckbriefPageModule {}
