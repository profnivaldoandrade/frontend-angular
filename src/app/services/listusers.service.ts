import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UsersList } from '../types/users-list';
import { IUsersResponse } from '../interfaces/users-response/users-response.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListusersService {
  
    private readonly _httpClient = inject(HttpClient)
  
  listusers(): Observable<UsersList>{
    const headers = new HttpHeaders().set('authorization', 'Bearer ' + localStorage.getItem('access-token'))
    return this._httpClient.get<IUsersResponse>('http://54.90.219.186:4040/users',{headers}).pipe(
      map((listusersService)=>{
        return listusersService.values
      })
    )
  }

}
