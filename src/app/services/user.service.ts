import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interface/user';
import {Observable} from 'rxjs';
import {Login} from '../interface/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userOnline = '';

  private API_URL = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.API_URL}/signup`, user);
  }
  userLogin(login: Login): Observable<any> {
    return this.http.post<Login>(`${this.API_URL}/signin`, login);
  }

}
