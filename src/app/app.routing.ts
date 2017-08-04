import { Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';

export const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'films', component: FilmsComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '', component: DashboardComponent },
    { path: '**', component: DashboardComponent },
];