import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnwesenheitDetailsPageRoutingModule } from './anwesenheit-details-routing.module';

import { DiklabuModule } from "../../components/diklabu.module";

import { AnwesenheitDetailsPage } from './anwesenheit-details.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiklabuModule,
    AnwesenheitDetailsPageRoutingModule
  ],
  declarations: [AnwesenheitDetailsPage]
})
export class AnwesenheitDetailsPageModule {}
