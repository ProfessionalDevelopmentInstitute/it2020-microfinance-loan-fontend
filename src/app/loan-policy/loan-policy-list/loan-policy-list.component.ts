import { Component, OnInit } from '@angular/core';
import {LoanPolicy} from '../../model/loanPolicy';
import {LoanPolicyListService} from '../../service/loan-policy-list.service';

@Component({
  selector: 'app-loan-policy-list',
  templateUrl: './loan-policy-list.component.html',
  styleUrls: ['./loan-policy-list.component.css']
})
export class LoanPolicyListComponent implements OnInit {
loanPolicies: LoanPolicy[];
  constructor(private lPService: LoanPolicyListService) { }

  ngOnInit(): void {
    this.lPService.LoanPolicyList().subscribe(
      value => this.loanPolicies = value.result,
      error => console.log(error),
      () => console.log('Finished Request Procress')
    );

  }

}
