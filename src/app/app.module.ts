import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ServerComponent } from './server/server.component';

export const routes: Routes = [
  { path: 'server', component: ServerComponent }
];

@NgModule({
  declarations: [
    ServerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
