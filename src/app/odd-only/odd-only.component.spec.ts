import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddOnlyComponent } from './odd-only.component';

describe('OddOnlyComponent', () => {
  let component: OddOnlyComponent;
  let fixture: ComponentFixture<OddOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
