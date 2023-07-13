import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RegisterEntity } from '../entity/RegisterEntity.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  
  
  register(registerEntity: RegisterEntity): Observable<RegisterEntity> {
    return this.http.post<RegisterEntity>(`${this.baseUrl}/auth/register`, registerEntity);
  }


  login(registerEntity: RegisterEntity): Observable<RegisterEntity> {
    return this.http.post<RegisterEntity>(`${this.baseUrl}/auth/login`, registerEntity, { withCredentials: false});
  }



  
}
