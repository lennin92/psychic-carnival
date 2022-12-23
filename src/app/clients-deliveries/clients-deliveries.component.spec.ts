import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsDeliveriesComponent } from './clients-deliveries.component';

describe('ClientsDeliveriesComponent', () => {
  let component: ClientsDeliveriesComponent;
  let fixture: ComponentFixture<ClientsDeliveriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsDeliveriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
