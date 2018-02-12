import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEventBindingDetailComponent } from './custom-event-binding-detail.component';

describe('CustomEventBindingDetailComponent', () => {
  let component: CustomEventBindingDetailComponent;
  let fixture: ComponentFixture<CustomEventBindingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomEventBindingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEventBindingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
