import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Guarantor} from '../model/guarantor';
import {ResponseModel} from '../model/response.model';


@Injectable({
  providedIn: 'root'
})
export class GuarantorService {
  constructor(private http: HttpClient) {
  }

  getGuarantorList(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>('http://localhost:9000/api/guarantors');
  }

  getGuarantorById(id: number): Observable<ResponseModel> {
    return this.http.get<ResponseModel>('http://localhost:9000/api/guarantors/' + id);
  }

  createGuarantor(guarantor: Guarantor): Observable<any> {
    return this.http.post('http://localhost:9000/api/guarantor', guarantor);
  }

  updateGuarantor(guarantor: Guarantor): Observable<any> {
    return this.http.put('http://localhost:9000/api/guarantors/', guarantor);
  }

  getByGuarantorName(guarantorName: string): Observable<Guarantor[]>{
    return this.http.get<Guarantor[]>('http://localhost:9000/api/guarantors/search?guarantorName=' + guarantorName);
  }

}
