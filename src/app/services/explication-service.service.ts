import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Explication } from '../explication';
import { AuthenticationRequest } from '../authRequest';
import { AuthenticationResponse } from '../authResponse';

@Injectable({
  providedIn: 'root'
})
export class ExplicationService {

  constructor(private http: HttpClient) { }

  /* 
  register() {
    return this.http.get<Explication[]>('/api/v1/auth/register');
  } 
  */

  authenticate(bodyRequest: AuthenticationRequest) {
    return this.http.post<AuthenticationResponse>('/api/v1/auth/authenticate', bodyRequest);
  }

  getExplicationsList() {
    return this.http.get<Explication[]>('/api/v1/explications');
  }

  getExplicationById(id: number) {
    return this.http.get<Explication>(`/api/v1/explications/${id}`);
  }

  createExplication(explication: Explication) {
    return this.http.post(`/api/v1/explications`, explication);
  }

  updateExplication(id: number, explication: Explication) {
    return this.http.put(`/api/v1/explications/${id}`, explication);
  }

  deleteExplication(id: number) {
    return this.http.delete(`/api/v1/explications/${id}`);
  }
}
