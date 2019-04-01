import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusReportsComponent } from './bus-reports.component';

describe('BusReportsComponent', () => {
  let component: BusReportsComponent;
  let fixture: ComponentFixture<BusReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
