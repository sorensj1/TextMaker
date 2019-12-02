import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/components/common/messageservice';
import { EditProjectModule } from './edit-project';

@NgModule({
	imports: [
		CommonModule,
		ButtonModule,
		EditProjectModule
	],
	declarations: [ProjectsComponent],
	exports: [ProjectsComponent],
	providers: [MessageService]
})
export class ProjectsModule { }
