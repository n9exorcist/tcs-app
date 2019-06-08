import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalviewComponent } from './hospitalview.component';

describe('HospitalviewComponent', () => {
  let component: HospitalviewComponent;
  let fixture: ComponentFixture<HospitalviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
