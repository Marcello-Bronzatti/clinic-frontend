import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private apiUrl = `${environment.apiBaseUrl}/appointment`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAvailableTimes(
    professionalId: string,
    date: string
  ): Observable<string[]> {
    const params = new HttpParams()
      .set('professionalId', professionalId)
      .set('date', date);

    return this.http.get<string[]>(`${this.apiUrl}/available-times`, {
      params,
    });
  }

  create(appointment: any): Observable<any> {
    return this.http.post(this.apiUrl, appointment);
  }

  cancel(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getByProfessional(professionalId: string, date: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}/by-professional?professionalId=${professionalId}&date=${date}`
    );
  }

  getAllByProfessional(professionalId: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}/professional/${professionalId}`
    );
  }
}
