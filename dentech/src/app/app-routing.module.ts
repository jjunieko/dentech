import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { LoggedGuard } from "./guards/login.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "folder",
    loadChildren: () =>
      import("./folder/folder.module").then((m) => m.FolderPageModule),
  },
  {
    path: "home",
    loadChildren: "./pages/home/home.module#HomePageModule",
    canActivate: [AuthGuard],
  },
  {
    path: "login",
    loadChildren: "./pages/login/login.module#LoginPageModule",
    canActivate: [LoggedGuard],
  },
  {
    path: "details",
    loadChildren: "./pages/details/details.module#DetailsPageModule",
    canActivate: [AuthGuard],
  },
  {
    path: "details/:id",
    loadChildren: "./pages/details/details.module#DetailsPageModule",
    canActivate: [AuthGuard],
  },
  {
    path: "users",
    loadChildren: "./pages/users/users.module#UsersPageModule",
    canActivate: [AuthGuard],
  },
  /* {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then( m => m.UsersPageModule)
  }, */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
