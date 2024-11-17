import { Component, inject, ViewChild } from '@angular/core';
import { ListusersService } from '../../services/listusers.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsersList } from '../../types/users-list';
import { AsyncPipe } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-listusers',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './listusers.component.html',
  styleUrl: './listusers.component.css'
})
export class ListusersComponent {
  
  userList$: Observable<UsersList> = of([])
  private _listuserService = inject(ListusersService)
  private _router = inject(Router)

  ngOnInit() {
    this.userList$ = this._listuserService.listusers()
  }
  cadUser() {
    this._router.navigate(['novo-usuario'])
  }
  
}
