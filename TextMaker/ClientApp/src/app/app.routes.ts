import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { TextCombinerComponent } from './text-combiner/text-combiner.component';

export const appRoutes: Routes = [
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'projects/:name', component: TextCombinerComponent },
	{ path: '', redirectTo: '/projects', pathMatch: 'full' },
];
