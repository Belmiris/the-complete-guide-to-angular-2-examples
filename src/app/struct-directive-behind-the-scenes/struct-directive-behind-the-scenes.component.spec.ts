import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructDirectiveBehindTheScenesComponent } from './struct-directive-behind-the-scenes.component';

describe('StructDirectiveBehindTheScenesComponent', () => {
  let component: StructDirectiveBehindTheScenesComponent;
  let fixture: ComponentFixture<StructDirectiveBehindTheScenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructDirectiveBehindTheScenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructDirectiveBehindTheScenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
