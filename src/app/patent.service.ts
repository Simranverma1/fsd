import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

export interface Patent {
  id: number;
  title: string;
  description: string;
  // Other fields...
}

@Injectable({
  providedIn: 'root'  // Can be provided in root since it is standalone
})
export class PatentService {

  private baseUrl = `${environment.apiUrl}/patents`;

  constructor(private http: HttpClient) { }

  getPatents(): Observable<Patent[]> {
    return this.http.get<Patent[]>(this.baseUrl);
  }

  // Additional API methods (e.g., addPatent, updatePatent, deletePatent) can be added here.
}
