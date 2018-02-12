import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEventDataComponent } from './send-event-data.component';

describe('SendEventDataComponent', () => {
  let component: SendEventDataComponent;
  let fixture: ComponentFixture<SendEventDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendEventDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendEventDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
