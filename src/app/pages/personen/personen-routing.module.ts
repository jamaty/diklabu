import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonenPage } from './personen.page';

const routes: Routes = [
  {
    path: '',
    component: PersonenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonenPageRoutingModule {}
