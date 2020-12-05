import { Component, OnInit } from '@angular/core';
import {Guarantor} from '../model/guarantor';
import {GuarantorService} from '../service/guarantor.service';
import {Loan} from '../model/loan';
import {LoanService} from '../service/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
