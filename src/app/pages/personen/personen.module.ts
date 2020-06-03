import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PersonenPageRoutingModule } from './personen-routing.module';
import { PersonenPage } from './personen.page';
import { DiklabuModule } from '../../components/diklabu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiklabuModule,
    PersonenPageRoutingModule,
  ],
  declarations: [PersonenPage]
})
export class PersonenPageModule {}
