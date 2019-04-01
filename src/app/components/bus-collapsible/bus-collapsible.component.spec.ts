import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusCollapsibleComponent } from './bus-collapsible.component';

describe('BusCollapsibleComponent', () => {
  let component: BusCollapsibleComponent;
  let fixture: ComponentFixture<BusCollapsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusCollapsibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusCollapsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
