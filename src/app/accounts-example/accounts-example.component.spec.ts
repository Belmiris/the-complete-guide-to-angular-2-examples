import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsExampleComponent } from './accounts-example.component';

describe('AccountsExampleComponent', () => {
  let component: AccountsExampleComponent;
  let fixture: ComponentFixture<AccountsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
