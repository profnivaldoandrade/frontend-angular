import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListusersComponent } from './components/listusers/listusers.component';
import { authGuard } from './guards/auth.guards';
import { CaduserComponent } from './components/caduser/caduser.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path:'login', component: LoginComponent},
    {path:'usuarios',
         component: ListusersComponent,
         canActivate:[authGuard()]
        },
    {path:'novo-usuario', 
        component: CaduserComponent,
        canActivate:[authGuard()]
    }
];
