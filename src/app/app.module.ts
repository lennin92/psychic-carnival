import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ButtonsModule } from 'ngx-foundation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ClientsDeliveriesComponent } from './clients-deliveries/clients-deliveries.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientsListComponent,
    CreateUserComponent,
    CreateClientComponent,
    ClientsDeliveriesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ButtonsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
