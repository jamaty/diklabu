import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonenPageRoutingModule } from './personen-routing.module';

import { PersonenPage } from './personen.page';

import { PersonAddComponent } from '../../components/person-add/person-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonenPageRoutingModule,
  ],
  declarations: [PersonenPage, PersonAddComponent]
})
export class PersonenPageModule {}
