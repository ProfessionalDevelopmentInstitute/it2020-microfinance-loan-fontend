import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CustomerService} from '../service/customer.service';
import {Member} from '../model/member';
import {Customer} from '../model/customer';
import {MemberListService} from '../service/member-list.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  myForm: FormGroup;
  member: Member[];
  constructor(private router: Router, private cService: CustomerService , private mService: MemberListService) {
    this.myForm = new FormGroup({
      customerName : new FormControl('', Validators.required),
      customerNRC : new FormControl('', Validators.required),
      customerAddress : new FormControl('', Validators.required),
      customerPhone : new FormControl('', Validators.required),
      customerOccupation : new FormControl('', Validators.required),
      member: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.mService.getMemberList().subscribe(
      value => {
        this.member = value.result;
        console.log(value.result);
      }
    );
  }

  Add(): void {
  const customers: Customer = {
    id: this.myForm.value.id,
      customerName: this.myForm.value.customerName,
      customerNRC: this.myForm.value.customerNRC,
      customerAddress: this.myForm.value.customerAddress,
      customerPhone: this.myForm.value.customerPhone,
      customerOccupation: this.myForm.value.customerOccupation,
      member: this.member[this.myForm.value.member]
    };
  console.log(customers);
  this.cService.createCustomer(customers).subscribe(
      value => {
        console.log(value);
      },
      error => {
        console.log(error);
      },
      () => {
        this.myForm.reset();
        this.router.navigate(['customer-list']);
      }
    );
  }

}
