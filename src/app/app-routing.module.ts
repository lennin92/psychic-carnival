import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientsListComponent } from './clients-list/clients-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'clients', component: ClientsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
