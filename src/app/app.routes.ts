import { Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { ProfileComponent } from '../views/profile/profile.component';

export const routes: Routes = [
    {
        path: '',
        title: 'SquashAPP - Home Page',
        component: HomeComponent
    },
    {
        path: 'profile',
        title: `SquashAPP - Player's Profile`,
        component: ProfileComponent
    }
];
