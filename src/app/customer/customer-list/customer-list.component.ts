import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  myF: FormGroup;
  constructor(public cService: CustomerService){
    this.myF = new FormGroup({
      customerName : new FormControl('', Validators.required)});
  }
  ngOnInit(): void {
    this.cService.getCustomerList().subscribe(
      value => {
        this.customers = value.result;
        console.log(value.result);
      },
      error => console.log(error),
      () => console.log('Finished Request Procress')
    );

  }

  searchName(): void{
    const customerName = this.myF.value.customerName;
    console.log(customerName);
    this.cService.search(customerName).subscribe(
      value => {
        this.customers = value;
        console.log(value);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('SCF!!!!');
      }
    );
  }
}
