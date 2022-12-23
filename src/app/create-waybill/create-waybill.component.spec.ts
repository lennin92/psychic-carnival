import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWaybillComponent } from './create-waybill.component';

describe('CreateWaybillComponent', () => {
  let component: CreateWaybillComponent;
  let fixture: ComponentFixture<CreateWaybillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWaybillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWaybillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
