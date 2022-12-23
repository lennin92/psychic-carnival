import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ClientsDeliveriesComponent } from './clients-deliveries/clients-deliveries.component';
import { CreateWaybillComponent } from './create-waybill/create-waybill.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'clients', component: ClientsListComponent},
  {path: 'add-client', component: CreateClientComponent},
  {path: 'client-deliveries', component: ClientsDeliveriesComponent},
  {path: 'create-waybill', component: CreateWaybillComponent},
  {path: 'create-user', component: CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
