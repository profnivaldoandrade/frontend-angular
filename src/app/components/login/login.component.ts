import { Component, inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('statusModal') statusModal!: ModalComponent;

  LoginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  private readonly _authService = inject(AuthService)
  private readonly _router = inject(Router)

  onLogin() {
    this._authService.login(this.LoginForm.value.email, this.LoginForm.value.password)
      .subscribe({
        next: (_)=>{
          this._router.navigate(['usuarios'])
        },
        error: (result) =>{
          console.log(result.status)
          if(result.status === 406){
            this.openModal(result.error.message);
          }else{
            this.openModal('Erro Insperado, acesse mais tarde!')
          }
        }
      })
  }
  openModal(message: string): void {
    this.statusModal.title = 'Erro!';
    this.statusModal.message = message;
    this.statusModal.showModal();
  }
}
