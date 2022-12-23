import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private router: Router) { }

  title = 'psychic-carnival';
  token = localStorage.getItem('auth_token');

  ngOnInit(){
    console.log(environment);
    if (this.token == null){
      this.router.navigate(['/login']);
    }
  };
}
