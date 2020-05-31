import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KrankmeldungPage } from './krankmeldung.page';

const routes: Routes = [
  {
    path: '',
    component: KrankmeldungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KrankmeldungPageRoutingModule {}
