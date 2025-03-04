import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginRequest, UserRegisterRequest, UserResponse } from './auth.model';
import { Observable } from 'rxjs';
import { API_URL } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(request: UserLoginRequest): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(`${API_URL}/auth/login`, request);
  }

  register(request: UserRegisterRequest): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(`${API_URL}/auth/register`, request);
  }
}
