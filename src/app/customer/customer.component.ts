import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {CustomerService} from '../service/customer.service';
import {Member} from '../model/member';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  myForm: FormGroup;
  member: Member[];
  constructor(private router: Router, private cService: CustomerService) {
    this.myForm = new FormGroup({
      customerName : new FormControl(null),
      customerNRCNo : new FormControl(null),
      customerAddress : new FormControl(null),
      customerPhone : new FormControl(null),
      customerOccupation : new FormControl(null),
      memberId : new FormControl(null)
    });
  }

  ngOnInit(): void {
  }

  Add(): void {
    let customers: Customer;
    customers = {
      customerName: this.myForm.value.customerName,
      customerNRCNo: this.myForm.value.customerNRCNo,
      customerAddress: this.myForm.value.customerAddress,
      customerPhone: this.myForm.value.customerPhone,
      customerOccupation: this.myForm.value.customerOccupation,
      memberId: this.member[this.myForm.value.member]
    };
    console.log(customers);
    this.cService.createCustomer(customers).subscribe(
      value => {
        this.member = value.result;
        console.log(value);
      },
      error => {
        console.log(error);
      }
    );
  }

}
