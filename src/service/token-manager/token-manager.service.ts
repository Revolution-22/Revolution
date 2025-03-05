import { Injectable } from '@angular/core';
import { Token } from './token-manager.model';

@Injectable({
  providedIn: 'root',
})
export class TokenManagerService {
  private TOKEN = 'TOKEN';

  storeToken(token: Token): Token {
    if (token.token && token.refreshToken) {
      localStorage.setItem(this.TOKEN, JSON.stringify(token));
    }
    return token;
  }

  getToken(): Token {
    const token = localStorage.getItem(this.TOKEN);
    const emptyToken = { token: '', refreshToken: '' };
    if (token) {
      try {
        return JSON.parse(token);
      } catch (exception) {
        return emptyToken;
      }
    }
    return emptyToken;
  }
}
