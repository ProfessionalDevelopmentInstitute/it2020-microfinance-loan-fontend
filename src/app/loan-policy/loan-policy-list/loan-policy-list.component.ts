import { Component, OnInit } from '@angular/core';
import {LoanPaymentPolicy} from '../../model/loanPaymentPolicy';
import {LoanPolicyListService} from '../../service/loan-policy-list.service';

@Component({
  selector: 'app-loan-policy-list',
  templateUrl: './loan-policy-list.component.html',
  styleUrls: ['./loan-policy-list.component.css']
})
export class LoanPolicyListComponent implements OnInit {
loanPolicies: LoanPaymentPolicy[];
  constructor(private lPService: LoanPolicyListService) { }

  ngOnInit(): void {
    this.lPService.LoanPolicyList().subscribe(
      value => this.loanPolicies = value.result,
      error => console.log(error),
      () => console.log('Finished Request Procress')
    );

  }

}
