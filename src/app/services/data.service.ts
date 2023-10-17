import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl: String = '';
  constructor(
    private http: HttpClient,
  ) {}

  public postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/post`, data);
  }
}
