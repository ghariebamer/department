import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmendetailsComponent } from './departmendetails.component';

describe('DepartmendetailsComponent', () => {
  let component: DepartmendetailsComponent;
  let fixture: ComponentFixture<DepartmendetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmendetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmendetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
