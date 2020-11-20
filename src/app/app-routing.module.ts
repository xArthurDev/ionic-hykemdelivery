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
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
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
    path: 'confirm-email',
    loadChildren: () => import('./pages/confirm-email/confirm-email.module').then( m => m.ConfirmEmailPageModule)
  },
  {
    path: 'cellphone',
    loadChildren: () => import('./pages/cellphone/cellphone.module').then( m => m.CellphonePageModule)
  },
  {
    path: 'confirm-cellphone',
    loadChildren: () => import('./pages/confirm-cellphone/confirm-cellphone.module').then( m => m.ConfirmCellphonePageModule)
  },
  {
    path: 'a-details',
    loadChildren: () => import('./pages/a-details/a-details.module').then( m => m.ADetailsPageModule)
  },
  {
    path: 'info-details',
    loadChildren: () => import('./pages/modal/info-details/info-details.module').then( m => m.InfoDetailsPageModule)
  },
  {
    path: 'schedule-details',
    loadChildren: () => import('./pages/modal/schedule-details/schedule-details.module').then( m => m.ScheduleDetailsPageModule)
  },
  {
    path: 'type-details',
    loadChildren: () => import('./pages/modal/type-details/type-details.module').then( m => m.TypeDetailsPageModule)
  },
  {
    path: 'rating-details',
    loadChildren: () => import('./pages/modal/rating-details/rating-details.module').then( m => m.RatingDetailsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
