import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmMaintComponent } from './film-maint/film-maint.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { SignInComponent } from '../fw/users/sign-in/sign-in.component';
import { RegisterUserComponent } from '../fw/users/register-user/register-user.component';

export const appRoutes: Routes = [
    { path: 'signin', component: SignInComponent },
    { path: 'register', component: RegisterUserComponent },
    { path: 'authenticated', component: AuthenticatedUserComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'film-list/:count', component: FilmListComponent },
            { path: 'film-detail/:film', component: FilmDetailComponent },
            { path: 'film-maint', component: FilmMaintComponent },
            { path: 'settings', component: SettingsComponent },
        ] },
        { path: '', component: SignInComponent },
        { path: '**', component: SignInComponent }
];