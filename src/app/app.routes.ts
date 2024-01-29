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
        loadComponent: () => import('../views/home/home.component')
            .then((m) => m.HomeComponent),
        canActivate: [authGuard]
    },
    {
        path: 'profile',
        title: `SquashAPP - Player's Profile`,
        loadComponent: () => import('../views/profile/profile.component')
            .then((m) => m.ProfileComponent),
        canActivate: [authGuard]
    },
    {
        path: 'history',
        title: `SquashAPP - Player's History`,
        loadComponent: () => import('../views/history/history.component')
            .then((m) => m.HistoryComponent),
        canActivate: [authGuard]
    },
    {
        path: 'auth',
        title: `SquashAPP - Login`,
        loadComponent: () => import('../views/login/login.component')
            .then((m) => m.LoginComponent),
    },
    {
        path: 'auth-callback',
        title: `SquashAPP - Login`,
        loadComponent: () => import('../views/auth-callback/auth-callback.component')
            .then((m) => m.AuthCallbackComponent),
    },
    {
        path: '**',
        title: 'SquashAPP - Home Page',
        loadComponent: () => import('../views/home/home.component')
            .then((m) => m.HomeComponent),
        canActivate: [authGuard]
    }
];
