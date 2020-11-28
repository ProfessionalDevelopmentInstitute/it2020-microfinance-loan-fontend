import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseModel} from '../model/response.model';
import {Guarantor} from '../model/guarantor';
import {Member} from '../model/member';

@Injectable({
  providedIn: 'root'
})
export class MemberListService {

  constructor(private http: HttpClient) { }
  getMemberList(): Observable<ResponseModel>{
    return this.http.get<ResponseModel>('http://localhost:9000/mdls/members');
  }
  MemberById(id: number): Observable<ResponseModel>{
    return this.http.get<ResponseModel>('http://localhost:9000/mdls/members/' + id);
  }
  createMembers(member: Member): Observable<any>{
    return this.http.post ('http://localhost:9000/mdls/member' , member);
  }
  updateMember(member: Member): Observable<any> {
    return this.http.put('http://localhost:9000/mdls/members/', member);
  }
}
