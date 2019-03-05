import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventparentComponent } from './eventparent.component';

describe('EventparentComponent', () => {
  let component: EventparentComponent;
  let fixture: ComponentFixture<EventparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
