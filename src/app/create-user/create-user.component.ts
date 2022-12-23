import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { LoginDto } from '../dtos/login-dto';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  constructor(private http: HttpClient,
              private router: Router) { }

  model = new LoginDto('', '');
  token = localStorage.getItem('auth_token');

  ngOnInit(){
    if (this.token == null){
      this.router.navigate(['/login']);
    }
  }


  onSubmit() {
    const req = this.http
    .post<LoginDto>('http://localhost:8080/ingeneo-test-api/auth/registration', this.model)
    .subscribe(data => {
      this.router.navigate(['/clients']);
    });
  }

}
