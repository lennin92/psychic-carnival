import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { LoginDto } from '../dtos/login-dto';
import { TokenDto } from '../dtos/token-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient,
              private router: Router) { }

  model = new LoginDto('', '');
  submitted = false;
  token = '';


  ngOnInit(){
    if (this.token != null){
      this.router.navigate(['/clients']);
    }
  }


  onSubmit() {
    const req = this.http
        .post<TokenDto>('http://localhost:8080/ingeneo-test-api/auth/token', this.model)
        .subscribe(data => {
          this.token = data.token;
          localStorage.setItem('auth_token', this.token);
          this.router.navigate(['/clients']);
        });
  }
}
