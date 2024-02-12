import { Routes } from '@angular/router';
import { authGuard } from '../shared/guards/auth.guard';
import { profileResolver } from '../views/profile/profile.resolver';

export const routes: Routes = [
    {
        path: '',
        title: 'SquashAPP - Home Page',
        loadComponent: () => import('../views/home/home.component')
            .then((m) => m.HomeComponent), 
    },
    {
        path: 'profile',
        title: `SquashAPP - Player's Profile`,
        loadComponent: () => import('../views/profile/profile.component')
            .then((m) => m.ProfileComponent),
        resolve: { user: profileResolver }, 
    },
    {
        path: 'tv',
        title: `SquashAPP - Squash TV`,
        loadComponent: () => import('../views/squash-tv/squash-tv.component')
            .then((m) => m.SquashTvComponent), 
    },
    {
        path: 'auth',
        title: `SquashAPP - Login`,
        loadComponent: () => import('../views/login/login.component')
            .then((m) => m.LoginComponent),
    },
    {
        path: '**',
        title: 'SquashAPP - Home Page',
        loadComponent: () => import('../views/home/home.component')
            .then((m) => m.HomeComponent), 
    }
];
