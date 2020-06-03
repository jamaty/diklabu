import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArbeitsgemeinschaftenPage } from './arbeitsgemeinschaften.page';

const routes: Routes = [
  {
    path: '',
    component: ArbeitsgemeinschaftenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArbeitsgemeinschaftenPageRoutingModule {}
