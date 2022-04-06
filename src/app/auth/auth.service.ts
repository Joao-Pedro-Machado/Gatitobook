import { environment } from './../../environments/environment';
import { UserService } from './user/user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  auth(user: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        `${API}/user/login`,
        {
          userName: user,
          password: password,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          this.userService.setToken(authToken);
        })
      );
  }
}
