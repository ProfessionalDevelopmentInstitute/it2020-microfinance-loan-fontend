import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPolicyListComponent } from './loan-policy-list.component';

describe('LoanPolicyListComponent', () => {
  let component: LoanPolicyListComponent;
  let fixture: ComponentFixture<LoanPolicyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanPolicyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanPolicyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
