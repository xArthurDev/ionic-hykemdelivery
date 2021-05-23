import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app-explaining',
    loadChildren: () => import('./pages/app-explaining/app-explaining.module').then( m => m.AppExplainingPageModule)
  },
  {
    path: '',
    redirectTo: 'ae-page',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/app-explaining/app-explaining.module').then( m => m.AppExplainingPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'email',
    loadChildren: () => import('./pages/email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'cellphone',
    loadChildren: () => import('./pages/cellphone/cellphone.module').then( m => m.CellphonePageModule)
  },
  {
    path: 'assistance-details/:id',
    loadChildren: () => import('./pages/assistance-details/assistance-details.module').then( m => m.AssistanceDetailsPageModule)
  },
  {
    path: 'assistance-details/:id:/info-details',
    loadChildren: () => import('./pages/modal/info-details/info-details.module').then( m => m.InfoDetailsPageModule)
  },
  {
    path: 'assistance-details/:id:/rating-details',
    loadChildren: () => import('./pages/modal/rating-details/rating-details.module').then( m => m.RatingDetailsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
