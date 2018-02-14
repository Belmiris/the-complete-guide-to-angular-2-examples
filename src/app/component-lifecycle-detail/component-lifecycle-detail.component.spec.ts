import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLifecycleDetailComponent } from './component-lifecycle-detail.component';

describe('ComponentLifecycleDetailComponent', () => {
  let component: ComponentLifecycleDetailComponent;
  let fixture: ComponentFixture<ComponentLifecycleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentLifecycleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLifecycleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
