import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';


const routes: Routes = [ {
  path: '',
  pathMatch: 'full',
  loadChildren: () => import('src/app/features/home/home.module').then(t => t.HomeModule),
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
