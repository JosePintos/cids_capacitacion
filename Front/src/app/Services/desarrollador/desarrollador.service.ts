import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesarrolladorService {
  protected readonly http = inject(HttpClient);
  protected readonly DESARROLLADORES_URL =
    'http://localhost:3000/desarrolladores';
  protected readonly ROLES_URL = 'http://localhost:3000/roles';

  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(this.ROLES_URL);
  }

  registrarDesarrollador(payload: any): Observable<any> {
    return this.http.post<any>(this.DESARROLLADORES_URL, payload);
  }

  getDesarrolladores(): Observable<any[]> {
    return this.http.get<any[]>(this.DESARROLLADORES_URL);
  }

  deleteDesarrollador(id: number): Observable<any> {
    return this.http.delete(`${this.DESARROLLADORES_URL}/${id}`);
  }
}
