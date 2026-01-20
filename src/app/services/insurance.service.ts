import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Insurance } from '../models/insurance.model';
import id from '@angular/common/locales/extra/id';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  private apiUrl = 'http://localhost:3000/insurances';

  constructor(private http: HttpClient) {}

  getById(id: string) {
  return this.http.get<Insurance>(`${this.apiUrl}/${id}`);
}

  // GET
  // GET
getAll(): Observable<Insurance[]> {
  return this.http.get<Insurance[]>(this.apiUrl);
}



  // POST
  add(data: Insurance): Observable<Insurance> {
    return this.http.post<Insurance>(this.apiUrl, data);
  }

  // PUT
  update(id: string, data: Insurance): Observable<Insurance> {
    return this.http.put<Insurance>(`${this.apiUrl}/${id}`, data);
  }

  // DELETE
  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

