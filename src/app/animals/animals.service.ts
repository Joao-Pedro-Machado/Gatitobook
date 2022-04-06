import { environment } from './../../environments/environment';
import { TokenService } from './../auth/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animals } from './animals';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  userList(userName: string): Observable<Animals> {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<Animals>(`${API}/${userName}/photos`, {
      headers,
    });
  }
}
