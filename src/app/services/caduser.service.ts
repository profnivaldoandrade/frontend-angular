import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CadUser } from '../interfaces/caduser-response/caduser.interface';

@Injectable({
  providedIn: 'root'
})
export class CaduserService {

  private readonly _httpClient = inject(HttpClient)
  
  create(user: CadUser): Observable<{ message: string }> {
    console.log(user)
    const headers = new HttpHeaders({'authorization':`Bearer ${localStorage.getItem('access-token')}`, 'Content-Type': 'application/json'})
    return this._httpClient.post<{ message: string }>('http://54.90.219.186:4040/user', user, {headers})
  }
}

