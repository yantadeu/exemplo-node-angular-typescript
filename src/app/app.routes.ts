import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {helltriangleRoutes} from "./helltriangle/helltriangle.routes";
import {resizeimageRoutes} from "./resizeimage/resizeimage.routes";

// Route Configuration
export const routes: Routes = [
   {
      path: '',
      redirectTo: "/helltriangle",
      pathMatch: 'full'
   },
   ...helltriangleRoutes,
   ...resizeimageRoutes
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
