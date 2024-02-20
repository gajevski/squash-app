import { Routes } from '@angular/router';
import { authGuard } from '../shared/guards/auth.guard';
import { profileResolver } from '../views/profile/profile.resolver';

export const routes: Routes = [
    {
        path: '',
        title: 'SquashAPP - Home Page',
        loadComponent: () => import('../views/home/home.component')
            .then((m) => m.HomeComponent),
        canActivate: [authGuard]
    },
    {
        path: 'home',
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
        resolve: { user: profileResolver },
        canActivate: [authGuard]
    },
    {
        path: 'tv',
        title: `SquashAPP - Squash TV`,
        loadComponent: () => import('../views/squash-tv/squash-tv.component')
            .then((m) => m.SquashTvComponent), 
    },
    {
        path: 'login',
        title: `SquashAPP - Login`,
        loadComponent: () => import('../views/login/login.component')
            .then((m) => m.LoginComponent),
    },
    {
        path: 'register',
        title: `SquashAPP - Register`,
        loadComponent: () => import('../views/register/register.component')
            .then((m) => m.RegisterComponent),
    },
    {
        path: '**',
        title: 'SquashAPP - Home Page',
        loadComponent: () => import('../views/home/home.component')
            .then((m) => m.HomeComponent), 
    }
];
