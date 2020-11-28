import { TestBed } from '@angular/core/testing';

import { LoanPolicyListService } from './loan-policy-list.service';

describe('LoanPolicyListService', () => {
  let service: LoanPolicyListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanPolicyListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
