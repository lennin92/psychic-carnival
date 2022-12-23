import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 

import { LoginDto } from '../dtos/login-dto';
import { TokenDto } from '../dtos/token-dto';
import { environment } from '../../environments/environment';

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
  }


  onSubmit() {
    const req = this.http
    .post<TokenDto>(`${environment.base_url}/auth/token`, this.model)
        .subscribe(data => {
          this.token = data.token;
          localStorage.setItem('auth_token', this.token);
          this.router.navigate(['/clients']);
        });
  }
}
