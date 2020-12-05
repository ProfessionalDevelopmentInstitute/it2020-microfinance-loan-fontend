import { Injectable } from '@angular/core';
import {LoginModel} from '../model/Login';
import {HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StaffModel} from '../model/StaffModel';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpClient: HttpClient;

  constructor(httpBackend: HttpBackend) {
    this.httpClient = new HttpClient(httpBackend);
  }

  public encrypt(login: LoginModel): string {
    const credential = `${login.email}:${login.password}`;
    const encrypt: string = window.btoa(credential);
    return 'Basic ' + encrypt;
  }

  public signIn(login: LoginModel): Observable<StaffModel> {
    const encrypt: string = this.encrypt(login);
    const httpHeader: HttpHeaders = new HttpHeaders({
      Authorization: encrypt
    });
    return this.httpClient.post<StaffModel>(
      'http://localhost:9000/api/staff/login',
      null,
      {headers: httpHeader}
    );
  }
}
