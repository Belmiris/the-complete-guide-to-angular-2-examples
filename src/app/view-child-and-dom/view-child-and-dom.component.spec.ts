import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildAndDomComponent } from './view-child-and-dom.component';

describe('ViewChildAndDomComponent', () => {
  let component: ViewChildAndDomComponent;
  let fixture: ComponentFixture<ViewChildAndDomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildAndDomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildAndDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
