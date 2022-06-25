import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmpoyeeComponent } from './all-empoyee.component';

describe('AllEmpoyeeComponent', () => {
  let component: AllEmpoyeeComponent;
  let fixture: ComponentFixture<AllEmpoyeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmpoyeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmpoyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
