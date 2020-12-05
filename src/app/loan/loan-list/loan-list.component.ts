import { Component, OnInit } from '@angular/core';
import {Loan} from '../../model/loan';
import {LoanService} from '../../service/loan.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {
  loans: Loan[];
  constructor(public lService: LoanService) { }
  ngOnInit(): void {
    this.lService.getLoanList().subscribe(
      value => this.loans = value.result,
      error => console.log(error),
      () => console.log('Finished Request Procress')
    );

  }
}
