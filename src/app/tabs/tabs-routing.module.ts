import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'a-details',
        loadChildren: () => import('.././pages/a-details/a-details.module').then( m => m.ADetailsPageModule)
      },
      {
        path: 'info-details',
        loadChildren: () => import('.././pages/modal/info-details/info-details.module').then( m => m.InfoDetailsPageModule)
      },
      {
        path: 'schedule-details',
        loadChildren: () => import('.././pages/modal/schedule-details/schedule-details.module').then( m => m.ScheduleDetailsPageModule)
      },
      {
        path: 'type-details',
        loadChildren: () => import('../pages/modal/type-details/type-details.module').then( m => m.TypeDetailsPageModule)
      },
      {
        path: 'rating-details',
        loadChildren: () => import('../pages/modal/rating-details/rating-details.module').then( m => m.RatingDetailsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
