import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AnwesenheitPageRoutingModule } from './anwesenheit-routing.module';
import { AnwesenheitPage } from './anwesenheit.page';
import { ListSchuelerComponent } from '../../components/list-schueler/list-schueler.component'
import { DiklabuModule } from '../../components/diklabu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiklabuModule,
    AnwesenheitPageRoutingModule
  ],
  declarations: [AnwesenheitPage, ListSchuelerComponent]
})
export class AnwesenheitPageModule {}
