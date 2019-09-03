import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/security/_helpers/auth.guard';
import { PublicLayoutComponent } from '@app/core/layouts/public-layout/public-layout.component';
import { SecureLayoutComponent } from '@app/core/layouts/secure-layout/secure-layout.component';
import { NotFoundComponent } from '@app/core/pages/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: './modules/security/security.module#SecurityModule'
      }
    ]
  },
  {
    path: '',
    component: SecureLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule',
        canActivate: [AuthGuard]
      }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
