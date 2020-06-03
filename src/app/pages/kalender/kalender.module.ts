import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { KalenderPageRoutingModule } from './kalender-routing.module';
import { KalenderPage } from './kalender.page';
import { DiklabuModule } from '../../components/diklabu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiklabuModule,
    KalenderPageRoutingModule
  ],
  declarations: [KalenderPage]
})
export class KalenderPageModule {}
