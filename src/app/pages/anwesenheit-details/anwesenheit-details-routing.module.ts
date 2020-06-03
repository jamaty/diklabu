import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnwesenheitDetailsPage } from './anwesenheit-details.page';

const routes: Routes = [
  {
    path: '',
    component: AnwesenheitDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnwesenheitDetailsPageRoutingModule {}
