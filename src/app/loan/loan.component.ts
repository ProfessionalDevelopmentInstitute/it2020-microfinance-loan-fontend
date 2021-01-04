import { Component, OnInit } from '@angular/core';
import {Guarantor} from '../model/guarantor';
import {GuarantorService} from '../service/guarantor.service';
import {Loan} from '../model/loan';
import {LoanService} from '../service/loan.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../model/customer';
import {LoanPaymentPolicy} from '../model/loanPaymentPolicy';
import {StaffModel} from '../model/StaffModel';
import {CustomerService} from '../service/customer.service';
import {StaffService} from '../service/staff.service';
import {LoanPolicyListService} from '../service/loan-policy-list.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  guarantor: Guarantor[];
  myForm: FormGroup;
  customer: Customer[];
  loanPaymentPolicy: LoanPaymentPolicy[];
  staff: StaffModel[];
  constructor(private router: Router, private lService: LoanService , private gService: GuarantorService, private cService: CustomerService,
              private staffService: StaffService, private loanPaymentService: LoanPolicyListService) {
    this.myForm = new FormGroup({
      loandedDate : new FormControl('', Validators.required),
      customer : new FormControl('', Validators.required),
      guarantor : new FormControl('', Validators.required),
      loanPaymentPolicy : new FormControl('', Validators.required),
      staff : new FormControl('', Validators.required)
    });
  }
  ngOnInit(): void {
    this.gService.getGuarantorList().subscribe(
      value => {
        this.guarantor = value.result;
        // console.log(value.result);
      }
    );
    this.cService.getCustomerList().subscribe(
      value => {
        this.customer = value.result;
        // console.log(value.result);
      }
    );
    this.loanPaymentService.LoanPolicyList().subscribe(
      value => {
        this.loanPaymentPolicy = value.result;
        // console.log(value.result);
      }
    );
    this.staffService.getStaff().subscribe(
      res => {
        // this.staff = res;
        this.staff = res;
        console.log( res );
      }
    );
  }

  click(): void {
    const loan: Loan = {
      loandedDate : this.myForm.value.loandedDate,
      guarantor : this.guarantor[this.myForm.value.guarantor] ,
      customer : this.customer[this.myForm.value.customer],
      loanPaymentPolicy : this.loanPaymentPolicy[this.myForm.value.loanPaymentPolicy],
      staff : this.staff[this.myForm.value.staff]
    };
    console.log(loan);
    this.lService.createLoan(loan).subscribe(
      value => {
        console.log(value);
      },
      error => {
        console.log(error);
      },
      () => {
      this.myForm.reset();
       this.router.navigate(['loan-list']);
    }
    );
  }
}
