import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const URL = 'http://localhost:3000/remoteEntry.js';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: 'flights',
    loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule)
  },

  {
    path: 'connectr',
    loadChildren: () =>
      // virtual import-path, see decl.ts
      import('connectr-mfe/Module').then((m) => m.RemoteEntryModule),
  },

  {
    path: '**',
    component: NotFoundComponent
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.

];



// {
//   path: 'flights',
//   loadChildren: () =>
//     loadRemoteModule({
//       type: 'module',
//       remoteEntry: URL,
//       exposedModule: './Module'
//     })
//     .then(m => m.FlightsModule)
//   //import('mfe1/Module').then(m => m.FlightsModule)
// },
