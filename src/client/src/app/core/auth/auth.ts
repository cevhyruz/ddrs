import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient);

  checkAuth(): boolean {
    const token = localStorage.getItem('authToken');
    if (!token) return false;
    try {
      return true;
    } catch {
      return false;
    }
  }

  login(username: string, password: string) {
    return this.http.post('/auth/login', {
      username, password
    });
  }

  logout() {
    return this.http.post('/auth/logout', {});
  }

}
