import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchuelermonitorPage } from './schuelermonitor.page';

const routes: Routes = [
  {
    path: '',
    component: SchuelermonitorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchuelermonitorPageRoutingModule {}
