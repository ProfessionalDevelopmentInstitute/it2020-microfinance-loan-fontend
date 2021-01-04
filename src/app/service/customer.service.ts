import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseModel} from '../model/response.model';
import {Guarantor} from '../model/guarantor';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
 getCustomerList(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>('http://localhost:9000/api/customers');
  }

  getCustomerById(id: number): Observable<ResponseModel> {
    return this.http.get<ResponseModel>('http://localhost:9000/api/customers/' + id);
  }

  createCustomer(customer: Customer): Observable<any> {
    return this.http.post('http://localhost:9000/api/customer', customer);
  }

  updateCustomer(customer: Customer): Observable<any> {
    return this.http.put('http://localhost:9000/api/customer/', customer);
  }

  search(customerName: string): Observable<Customer[]>{
    return this.http.get<Customer[]>('http://localhost:9000/api/customers/search/{customerName}?customerName=' + customerName);
  }
}
