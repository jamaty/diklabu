import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "folder/Posteingang",
    pathMatch: "full",
  },
  {
    path: "folder/:id",
    loadChildren: () =>
      import("./folder/folder.module").then((m) => m.FolderPageModule),
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
