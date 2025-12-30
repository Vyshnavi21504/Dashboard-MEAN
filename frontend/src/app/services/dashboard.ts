import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'https://mean-admin-backend.onrender.com/api/dashboard';

  constructor(private http: HttpClient) {}

  getStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats`);
  }

  getChartData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/chart-data`);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }
addUser(user: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/users`, user);
}
}