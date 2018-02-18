import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddUnlessComponent } from './odd-unless.component';

describe('OddUnlessComponent', () => {
  let component: OddUnlessComponent;
  let fixture: ComponentFixture<OddUnlessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddUnlessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddUnlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
