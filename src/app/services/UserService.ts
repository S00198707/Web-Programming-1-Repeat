import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = 'http://localhost:4800/user';

  constructor(private http: HttpClient) {}

  createUser(email: string, password: string, firstname: string, lastname: string) {
    const bodyData = {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname
    };
    return this.http.post(`${this.apiUrl}/create`, bodyData);
  }

  deleteUser(userId: string) {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }

  getUsers() {
    return this.http.get(`${this.apiUrl}`);
  }
}
