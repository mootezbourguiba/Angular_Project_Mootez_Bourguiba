import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.module';
import { HomeComponent } from './app/home/home.component';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { FormProductComponent } from './app/form-product/form-product.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(HomeComponent),
    importProvidersFrom(HeaderComponent),
    importProvidersFrom(FooterComponent),
    importProvidersFrom(FormProductComponent)
  ]
})
.catch(err => console.error(err));
