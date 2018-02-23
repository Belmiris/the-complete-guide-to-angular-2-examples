import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentFiveComponent } from './assignment-five.component';

describe('AssignmentFiveComponent', () => {
  let component: AssignmentFiveComponent;
  let fixture: ComponentFixture<AssignmentFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
