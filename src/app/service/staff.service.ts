import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {StaffModel} from '../model/StaffModel';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) { }
  public getAll(): Observable<StaffModel[]> {
    return this.http.get<StaffModel[]>('http://localhost:9000/api/staff');
  }

  public register(student: StaffModel): Observable<any>{
    return this.http.post<any>('http://localhost:9000/api/staff/register' , student);
  }
}
