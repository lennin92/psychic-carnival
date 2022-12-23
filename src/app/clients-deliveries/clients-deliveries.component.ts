import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { WaybillDto } from '../dtos/waybill-dto'
import { BillOfLandingDto } from '../dtos/bill-of-landing-dto'
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-clients-deliveries',
  templateUrl: './clients-deliveries.component.html',
  styleUrls: ['./clients-deliveries.component.css']
})
export class ClientsDeliveriesComponent {
  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute) { }

  token = localStorage.getItem('auth_token');
  waybills :WaybillDto[] = [];
  billsOfLanding : BillOfLandingDto[] = [];
  clientId = 0;


  ngOnInit(){
    if (this.token == null){
      this.router.navigate(['/login']);
    }
    this.route.queryParams.subscribe( params =>{
      this.clientId = params['client'];
    });
    this.loadWayBills();
    this.loadBillOfLanding();
  };

  loadWayBills() : void {
    this.route.queryParams.subscribe(params=>{
      const cid = params['client'];
      this.http
      .get<WaybillDto[]>(`${environment.base_url}/waybill?clientId==${cid}`, {headers:{'Authorization': `Bearer ${this.token}`}})
      .subscribe(bls =>{
        this.waybills = bls;
        console.log(this.waybills);
      } );
    });
  }
  loadBillOfLanding() : void {
    this.http
    .get<BillOfLandingDto[]>('http://localhost:8080/ingeneo-test-api/bill_of_landing?clientId==${cid}', {headers:{'Authorization': `Bearer ${this.token}`}})
    .subscribe(bls => {
      this.billsOfLanding = bls;
      console.log(this.billsOfLanding);
    });

  }
}
