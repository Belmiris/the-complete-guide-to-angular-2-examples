import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandNgSwitchComponent } from './understand-ng-switch.component';

describe('UnderstandNgSwitchComponent', () => {
  let component: UnderstandNgSwitchComponent;
  let fixture: ComponentFixture<UnderstandNgSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderstandNgSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderstandNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
