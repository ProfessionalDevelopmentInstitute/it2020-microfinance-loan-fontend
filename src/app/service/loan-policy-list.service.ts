import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseModel} from '../model/response.model';
import {LoanPaymentPolicy} from '../model/loanPaymentPolicy';

@Injectable({
  providedIn: 'root'
})
export class LoanPolicyListService {

  constructor(private http: HttpClient) { }
  LoanPolicyList(): Observable<ResponseModel>{
    return this.http.get<ResponseModel>('http://localhost:9000/api/loanPayments');
  }
  createLoanPolicy(loanPolicy: LoanPaymentPolicy): Observable<any>{
    return this.http.post ('http://localhost:9000/api/loanPayment' , loanPolicy);
  }
}
