import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './security/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "modulo-uno",
    loadChildren: () => import('./modulo-uno/modulo-uno.module').then(m => m.ModuloUnoModule)
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
