import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoanPolicyListService} from '../service/loan-policy-list.service';
import {Router} from '@angular/router';
class LoanPolicy{
  constructor(public id: number , public loanAmount: number, public loanInterest: number, public monthlyPayment: number,
              public months: number) {
  }
}

@Component({
  selector: 'app-loan-policy',
  templateUrl: './loan-policy.component.html',
  styleUrls: ['./loan-policy.component.css']
})
export class LoanPolicyComponent implements OnInit {
@ViewChild('myForm')
  myForm: NgForm;
  constructor(private lPService: LoanPolicyListService , private router: Router) {
  }

  ngOnInit(): void {
  }

  submit(): void {
      const loanPolicies: LoanPolicy = new LoanPolicy(this.myForm.value.id, this.myForm.value.loanAmount, this.myForm.value.loanInterest,
        this.myForm.value.monthlyPayment, this.myForm.value.months);
      console.log(loanPolicies);
      this.lPService.createLoanPolicy(loanPolicies).subscribe(
        value => {
          console.log(value);
        },
        error => {
          console.log(error);
        },
        () => {
          this.myForm.reset();
          this.router.navigate(['loanPolicy-list']);
        }
      );
    }
}
