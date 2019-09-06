import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ButtonModule } from 'primeng/button';
import { EditProjectModule } from './edit-project';

@NgModule({
	imports: [
		CommonModule,
		ButtonModule,
		EditProjectModule
	],
	declarations: [ProjectsComponent],
	exports: [ProjectsComponent]
})
export class ProjectsModule { }
