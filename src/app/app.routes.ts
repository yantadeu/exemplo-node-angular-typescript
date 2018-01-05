import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelltriangleComponent} from './helltriangle/helltriangle.component';

// Route Configuration
export const routes: Routes = [
   { path: 'helltriangle', component: HelltriangleComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
