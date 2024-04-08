import { Routes } from '@angular/router';
import { authGuard } from '../shared/guards/auth.guard';
import { profileResolver } from '../views/profile/profile.resolver';
import { tutorialResolver } from '../views/tutorial/tutorial.resolver';
import { advancedTutorialResolver } from '../views/advanced-tutorial/advanced-tutorial.resolver';
import { playerPageResolver } from '../views/player-page/player-page.resolver';

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
        path: 'player',
        title: `SquashAPP - Player's Profile`,
        loadComponent: () => import('../views/player-page/player-page.component')
            .then((m) => m.PlayerPageComponent),
        resolve: { user: playerPageResolver },
        canActivate: [authGuard]
    },
    {
        path: 'practice',
        title: `SquashAPP - Squash Practice`,
        loadComponent: () => import('../views/practice/practice.component')
            .then((m) => m.PracticeComponent),
        canActivate: [authGuard]  
    },
    {
        path: 'login',
        title: `SquashAPP - Login`,
        loadComponent: () => import('../views/login/login.component')
        .then((m) => m.LoginComponent),
    },
    {
        path: 'tutorial',
        title: `SquashAPP - Tutorial`,
        loadComponent: () => import('../views/tutorial/tutorial.component')
        .then((m) => m.TutorialComponent),
        resolve: { progress: tutorialResolver },
        canActivate: [authGuard]  
    },
    {
        path: 'advanced-squash',
        title: `SquashAPP - Advanced Squash`,
        loadComponent: () => import('../views/advanced-tutorial/advanced-tutorial.component')
            .then((m) => m.AdvancedTutorialComponent),
        resolve: { progress: advancedTutorialResolver },
    },
    {
        path: 'register',
        title: `SquashAPP - Register`,
        loadComponent: () => import('../views/register/register.component')
            .then((m) => m.RegisterComponent),
    },
    {
        path: 'sparring',
        title: `SquashAPP - Sparring`,
        loadComponent: () => import('../views/sparring/sparring.component')
            .then((m) => m.SparringComponent),
    },
    {
        path: 'stoper',
        title: `SquashAPP - Stoper`,
        loadComponent: () => import('../views/stoper/stoper.component')
            .then((m) => m.StoperComponent),
    },
    {
        path: 'search-player',
        title: `SquashAPP - Search player`,
        loadComponent: () => import('../views/search-player/search-player.component')
            .then((m) => m.SearchPlayerComponent),
    },
    {
        path: '**',
        title: 'SquashAPP - Home Page',
        loadComponent: () => import('../views/home/home.component')
            .then((m) => m.HomeComponent),
        canActivate: [authGuard]  
    }
];
