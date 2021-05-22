import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ae-page',
    loadChildren: () => import('./pages/ae-page/ae-page.module').then( m => m.AePagePageModule)
  },
  {
    path: '',
    redirectTo: 'ae-page',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/ae-page/ae-page.module').then( m => m.AePagePageModule)
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
    path: 'assistance-details/:id:/schedule-details',
    loadChildren: () => import('./pages/modal/schedule-details/schedule-details.module').then( m => m.ScheduleDetailsPageModule)
  },
  {
    path: 'assistance-details/:id:/type-details',
    loadChildren: () => import('./pages/modal/type-details/type-details.module').then( m => m.TypeDetailsPageModule)
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
