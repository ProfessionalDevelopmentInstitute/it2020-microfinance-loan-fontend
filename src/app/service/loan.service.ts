import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseModel} from '../model/response.model';
import {Loan} from '../model/loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) { }
  getLoanList(): Observable<ResponseModel>{
    return this.http.get<ResponseModel>('http://localhost:9000/mdls/loans');
  }
  getLoanbyId(id: number): Observable<ResponseModel>{
    return this.http.get<ResponseModel>('http://localhost:9000/mdls/loans/' + id);
  }
  createLoan( loan: Loan): Observable<any>{
    return this.http.post('http://localhost:9000/mdls/loan' , loan);
  }

}
