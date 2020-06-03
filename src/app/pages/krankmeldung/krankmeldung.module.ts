import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { KrankmeldungPageRoutingModule } from './krankmeldung-routing.module';
import { KrankmeldungPage } from './krankmeldung.page';
import { DiklabuModule } from '../../components/diklabu.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiklabuModule,
    KrankmeldungPageRoutingModule
  ],
  declarations: [KrankmeldungPage]
})
export class KrankmeldungPageModule {}
