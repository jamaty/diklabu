import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchuelermonitorPageRoutingModule } from './schuelermonitor-routing.module';

import { SchuelermonitorPage } from './schuelermonitor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchuelermonitorPageRoutingModule
  ],
  declarations: [SchuelermonitorPage]
})
export class SchuelermonitorPageModule {}
