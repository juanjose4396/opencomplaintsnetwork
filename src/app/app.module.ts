import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AgmCoreModule } from '@agm/core';
import { RegistroComponent } from './registro/registro/registro.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './services/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
    {path: '' , component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'registro', component: RegistroComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAYqegnMjrvXCsvZFWqALye-Wn1r-wMMws'
    }),
    AngularFireModule.initializeApp(environment.firebase, 'opencomplaintsnetwork'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
