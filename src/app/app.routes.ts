import { Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { ProfileComponent } from '../views/profile/profile.component';
import { HistoryComponent } from '../views/history/history.component';
import { LoginComponent } from '../views/login/login.component';
import { AuthCallbackComponent } from '../views/auth-callback/auth-callback.component';
import { authGuard } from '../shared/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        title: 'SquashAPP - Home Page',
        component: HomeComponent,
        canActivate: [authGuard]
    },
    {
        path: 'profile',
        title: `SquashAPP - Player's Profile`,
        component: ProfileComponent,
        canActivate: [authGuard]
    },
    {
        path: 'history',
        title: `SquashAPP - Player's History`,
        component: HistoryComponent,
        canActivate: [authGuard]
    },
    {
        path: 'auth',
        title: `SquashAPP - Login`,
        component: LoginComponent
    },
    {
        path: 'auth-callback',
        title: `SquashAPP - Login`,
        component: AuthCallbackComponent
    },
    {
        path: '**',
        title: 'SquashAPP - Home Page',
        component: HomeComponent,
        canActivate: [authGuard]
    }
];
