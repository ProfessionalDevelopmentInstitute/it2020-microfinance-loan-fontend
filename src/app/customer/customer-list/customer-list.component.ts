import { Component, OnInit } from '@angular/core';
import {Guarantor} from '../../model/guarantor';
import {GuarantorService} from '../../service/guarantor.service';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  constructor(public cService: CustomerService){}
  ngOnInit(): void {
    this.cService.getCustomerList().subscribe(
      value => this.customers = value.result,
      error => console.log(error),
      () => console.log('Finished Request Procress')
    );

  }
}
