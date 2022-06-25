import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEmployeeComponent } from './details-employee.component';

describe('DetailsEmployeeComponent', () => {
  let component: DetailsEmployeeComponent;
  let fixture: ComponentFixture<DetailsEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
