import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FwModule } from '../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from './app.routing';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmMaintComponent } from './film-maint/film-maint.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserService } from './services/user.service';
import { UserApi } from '../fw/users/user-api';
import { AuthGuard } from './services/auth-guard.service';
import { AppDataService } from './services/app-data.service';
import { FilmPanelComponent } from './panels/film-panel/film-panel.component';
import { ImagePanelComponent } from './panels/image-panel/image-panel.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        SettingsComponent,
        FilmDetailComponent,
        FilmListComponent,
        FilmMaintComponent,
        AuthenticatedUserComponent,
        FilmPanelComponent,
        ImagePanelComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FwModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        UserService,
        { provide: UserApi, useExisting: UserService },
        AuthGuard,
        AppDataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
