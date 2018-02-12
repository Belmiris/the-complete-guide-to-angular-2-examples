import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentProjectionComponent } from './ng-content-projection.component';

describe('NgContentProjectionComponent', () => {
  let component: NgContentProjectionComponent;
  let fixture: ComponentFixture<NgContentProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentProjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
