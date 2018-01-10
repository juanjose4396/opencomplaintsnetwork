import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home/home.component';

import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
    {path: '' , component: HomeComponent},
    {path: 'home', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAYqegnMjrvXCsvZFWqALye-Wn1r-wMMws'
    })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
