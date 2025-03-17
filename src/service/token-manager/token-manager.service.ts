import { Injectable } from '@angular/core';
import { Token } from './token-manager.model';

@Injectable({
  providedIn: 'root',
})
export class TokenManagerService {
  private LS_TOKEN_KEY = 'REVO_TOKEN_KEY';

  storeToken(token: Token): Token {
    localStorage.setItem(this.LS_TOKEN_KEY, JSON.stringify(token));
    return token;
  }

  getToken(): Token | null {
    const token = localStorage.getItem(this.LS_TOKEN_KEY);
    if (token) {
      return JSON.parse(token);
    }
    return null;
  }
}
