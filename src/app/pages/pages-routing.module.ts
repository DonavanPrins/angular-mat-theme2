import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutePath } from '../@shared/constants/routes.constants';

import { PagesComponent } from '../pages/pages.component';

export const pagesRoutes: Routes = [
  {
    component: PagesComponent,
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        loadChildren: () =>
          import('./dashboard').then((me) => me.DashboardModule),
        path: RoutePath.Dashboard,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
