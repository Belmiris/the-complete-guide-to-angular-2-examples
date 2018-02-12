import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPropertyBindingDetailComponent } from './custom-property-binding-detail.component';

describe('CustomPropertyBindingDetailComponent', () => {
  let component: CustomPropertyBindingDetailComponent;
  let fixture: ComponentFixture<CustomPropertyBindingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPropertyBindingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPropertyBindingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
