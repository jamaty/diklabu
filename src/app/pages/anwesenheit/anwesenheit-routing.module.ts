import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnwesenheitPage } from './anwesenheit.page';

const routes: Routes = [
  {
    path: '',
    component: AnwesenheitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnwesenheitPageRoutingModule {}
