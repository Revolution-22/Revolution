import { Injectable } from '@angular/core';
import { Token } from './token-manager.model';

@Injectable({
  providedIn: 'root'
})
export class TokenManagerService {

  private TOKEN = 'TOKEN';

  constructor() { }

  storeToken(token: Token): Token {
    if (token && token.token && token.refreshToken) {
      localStorage.setItem(this.TOKEN, JSON.stringify(token));
    }
    return token;
  }

  getToken(): Token {
    const token = localStorage.getItem(this.TOKEN);
    if (token) {
      return JSON.parse(token);
    }
    return { token: '', refreshToken: ''}
  }
}
