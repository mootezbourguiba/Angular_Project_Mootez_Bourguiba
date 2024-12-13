import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './product/products/products.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ContactComponent } from './contact/contact/contact.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProfileComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
