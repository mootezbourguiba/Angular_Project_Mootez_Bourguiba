import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom, ValueProvider } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.module';
import { provideServerRoutesConfig } from '@angular/ssr';
import { serverRoutes } from './app/app.routes.server';
import { DOCUMENT } from '@angular/common';

// Provide the DOCUMENT token for the server-side context
const documentProvider: ValueProvider = {
  provide: DOCUMENT,
  useValue: {}
};

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    provideServerRoutesConfig(serverRoutes),
    documentProvider
  ]
})
.catch(err => console.error(err));

export default AppComponent;
