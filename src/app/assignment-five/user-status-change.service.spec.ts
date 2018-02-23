import { TestBed, inject } from '@angular/core/testing';

import { UserStatusChangeService } from './user-status-change.service';

describe('UserStatusChangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserStatusChangeService]
    });
  });

  it('should be created', inject([UserStatusChangeService], (service: UserStatusChangeService) => {
    expect(service).toBeTruthy();
  }));
});
