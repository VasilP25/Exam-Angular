import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$$ = new BehaviorSubject<UserForAuth | null>(null);
  private user$ = this.user$$.asObservable();

  USER_KEY = '[user]';
  user: UserForAuth | null = null;
  get isLogged(): boolean {
    return !!this.user;
  }

  get userId(): UserForAuth {
    return this.user!;
  }
  constructor(private http: HttpClient) {
    this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  register(
    username: String,
    email: string,
    password: string,
    repeatPassword: string
  ) {
    return this.http
      .post<UserForAuth>('/api/register', {
        email,
        username,
        password,
        repeatPassword,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }
  logout() {
    return this.http
      .post('/api/logout', {})
      .pipe(tap((user) => this.user$$.next(null)));
  }

  login(email: string, password: string) {
    return this.http
      .post<UserForAuth>('/api/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }
  getUser() {
    return this.http.get<UserForAuth>('/api/users/profile');
  }
}
