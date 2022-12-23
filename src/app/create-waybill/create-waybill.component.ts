import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { CreateDeliveryDto } from '../dtos/create-delivery-dto';
import { ProductTypeDto } from '../dtos/product-type-dto';
import { environment } from '../../environments/environment';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-create-waybill',
  templateUrl: './create-waybill.component.html',
  styleUrls: ['./create-waybill.component.css']
})
export class CreateWaybillComponent {
  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute) { }

  model = new CreateDeliveryDto('', '', '', '', '', '', '', '');
  token = localStorage.getItem('auth_token');
  productTypes : ProductTypeDto[] = [];

  ngOnInit(){
    if (this.token == null){
      this.router.navigate(['/login']);
    }
    this.updateProductTypes();
  };

  updateProductTypes() {
    this.http
    .get<ProductTypeDto[]>(`http://localhost:8080/ingeneo-test-api/product_types`, {headers:{'Authorization': `Bearer ${this.token}`}})
    .subscribe(bls =>{
      this.productTypes = bls;
    } );
  }

  onFormSubmit(){

    this.route.queryParams.subscribe(params=>{
      this.model.clientId = params['client'];
      console.log(this.model);
      const req = this.http
      .post<CreateDeliveryDto>(`${environment.base_url}/waybill`, this.model, {headers:{'Authorization': `Bearer ${this.token}`}})
      .subscribe(data => {
        this.router.navigate(['/clients']);
      });
    });
  }

}
