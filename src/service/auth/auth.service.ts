import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  UserLoginRequest,
  UserRegisterRequest,
  UserResponse,
} from './auth.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(request: UserLoginRequest): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(
      `${environment.apiUrl}/auth/login`,
      request,
    );
  }

  register(request: UserRegisterRequest): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(
      `${environment.apiUrl}/auth/register`,
      request,
    );
  }
}
