import { Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';

export const appRoutes: Routes = [
	{ path: 'teams', component: TeamsComponent },
	{ path: 'teams/:name', component: TeamsComponent },
	{ path: '', redirectTo: '/teams', pathMatch: 'full' },
];
