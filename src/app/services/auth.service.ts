import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiurl = environment.apiUrl + "/receptionist";

  constructor(private http: HttpClient) { }

  register(inputData: any) {
    return this.http.post(this.apiurl + '/addreceptionist', inputData);
  }

  getBycode(code: any) {
    return this.http.get(this.apiurl + '/getreceptionist/' + code);
  }

  IsloggedIn() {
    return sessionStorage.getItem('username') != null;
  }
}
