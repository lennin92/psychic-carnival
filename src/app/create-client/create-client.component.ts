import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { CreateClientDto } from '../dtos/create-client-dto';
import { ClientDetailDto } from '../dtos/client-detail-dto'

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent {
  constructor(private http: HttpClient,
              private router: Router) { }

  token = localStorage.getItem('auth_token');
  model = new CreateClientDto('', '');


  ngOnInit(){
    if (this.token == null){
      this.router.navigate(['/login']);
    }
  };

  onFormSubmit() {
    const req = this.http
    .post<ClientDetailDto>('http://localhost:8080/ingeneo-test-api/clients', this.model, {headers:{'Authorization': `Bearer ${this.token}`}})
    .subscribe(data => {
      this.router.navigate(['/clients']);
    });
  }
}
