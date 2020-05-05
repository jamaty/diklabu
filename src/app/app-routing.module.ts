import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "personen",
    pathMatch: "full",
  },
  {
    path: "folder/:id",
    loadChildren: () =>
      import("./pages/folder/folder.module").then((m) => m.FolderPageModule),
  },
  {
    path: "anwesenheit",
    loadChildren: () =>
      import("./pages/anwesenheit/anwesenheit.module").then(
        (m) => m.AnwesenheitPageModule
      ),
  },
  {
    path: "klassensteckbrief",
    loadChildren: () =>
      import("./pages/klassensteckbrief/klassensteckbrief.module").then(
        (m) => m.KlassensteckbriefPageModule
      ),
  },
  {
    path: 'personen',
    loadChildren: () => import('./pages/personen/personen.module').then( m => m.PersonenPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
