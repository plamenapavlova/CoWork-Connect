import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { MasterViewComponent } from './master-view/master-view.component';
import { CoworkingSpaceMapViewComponent } from './coworking-space-map-view/coworking-space-map-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'master-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'master-view', component: MasterViewComponent, data: { text: 'Master-View' } },
  { path: 'coworking-space-map-view', component: CoworkingSpaceMapViewComponent, data: { text: 'Coworking-Space-Map-View' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
