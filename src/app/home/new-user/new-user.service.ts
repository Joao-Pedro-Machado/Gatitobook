import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private http: HttpClient) {}

  registerNewUser(newUser: NewUser) {
    return this.http.post(`${API}/user/signup`, newUser);
  }

  userAlreadyExists(userName: string) {
    return this.http.get(`${API}/user/exists/${userName}`);
  }
}
