import { HttpClient,HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _httpClient = inject(HttpClient)
  
  login(email: string, password: string):Observable<{token: string}>{
      return this._httpClient.post<{token: string}>('http://54.90.219.186:4040/login', { email, password}).pipe(
        map(resp =>{
          localStorage.setItem('access-token', resp.token)
          return resp
        })
      )
  }
}
