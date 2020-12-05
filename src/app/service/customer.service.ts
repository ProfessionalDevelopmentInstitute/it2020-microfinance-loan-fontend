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
    return this.http.get<ResponseModel>('http://localhost:9000/mdls/customers');
  }

  getCustomerById(id: number): Observable<ResponseModel> {
    return this.http.get<ResponseModel>('http://localhost:9000/mdls/customers/' + id);
  }

  createCustomer(customer: Customer): Observable<ResponseModel> {
    return this.http.post<ResponseModel>('http://localhost:9000/mdls/customer/', customer);
  }

  updateCustomer(customer: Customer): Observable<any> {
    return this.http.put('http://localhost:9000/mdls/customer/', customer);
  }

  getCustomerName(customerName: string): Observable<any>{
    return this.http.get('http://localhost:9000/mdls/guarantors/search?guarantorName' + customerName);
  }
}
