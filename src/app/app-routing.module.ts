import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posteingang',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./pages/folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'anwesenheit',
    loadChildren: () =>
      import('./pages/anwesenheit/anwesenheit.module').then(
        (m) => m.AnwesenheitPageModule
      ),
  },
  {
    path: 'klassen',
    loadChildren: () =>
      import('./pages/klassensteckbrief/klassensteckbrief.module').then(
        (m) => m.KlassensteckbriefPageModule
      ),
  },
  {
    path: 'benutzerverwaltung',
    loadChildren: () =>
      import('./pages/personen/personen.module').then(
        (m) => m.PersonenPageModule
      ),
  },
  {
    path: 'posteingang',
    loadChildren: () =>
      import('./pages/posteingang/posteingang.module').then(
        (m) => m.PosteingangPageModule
      ),
  },
  {
    path: 'kalender',
    loadChildren: () =>
      import('./pages/kalender/kalender.module').then(
        (m) => m.KalenderPageModule
      ),
  },
  {
    path: 'krankmeldung',
    loadChildren: () =>
      import('./pages/krankmeldung/krankmeldung.module').then(
        (m) => m.KrankmeldungPageModule
      ),
  },
  {
    path: 'schuelermonitor',
    loadChildren: () =>
      import('./pages/schuelermonitor/schuelermonitor.module').then(
        (m) => m.SchuelermonitorPageModule
      ),
  },
  {
    path: 'arbeitsgemeinschaften',
    loadChildren: () =>
      import('./pages/arbeitsgemeinschaften/arbeitsgemeinschaften.module').then(
        (m) => m.ArbeitsgemeinschaftenPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
