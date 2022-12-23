import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { ClientDetailDto } from '../dtos/client-detail-dto'

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent {
  constructor(private http: HttpClient,
              private router: Router) { }

  token = localStorage.getItem('auth_token');
  clients: ClientDetailDto[] = [];

  ngAfterViewInit(){
    if (this.token == null){
      this.router.navigate(['/login']);
    }
    this.getAllClients();
  };

  getAllClients(): void {
    this.http
      .get<ClientDetailDto[]>('http://localhost:8080/ingeneo-test-api/clients', {headers:{'Authorization': `Bearer ${this.token}`}})
      .subscribe(clients => this.clients = clients)
  }
}
