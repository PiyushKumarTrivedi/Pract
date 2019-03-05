import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventchildComponent } from './eventchild.component';

describe('EventchildComponent', () => {
  let component: EventchildComponent;
  let fixture: ComponentFixture<EventchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
