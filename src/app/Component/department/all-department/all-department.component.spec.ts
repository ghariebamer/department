import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDepartmentComponent } from './all-department.component';

describe('AllDepartmentComponent', () => {
  let component: AllDepartmentComponent;
  let fixture: ComponentFixture<AllDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
