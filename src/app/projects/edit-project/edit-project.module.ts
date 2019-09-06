import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditProjectComponent } from './edit-project.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/components/button/button';

@NgModule({
	imports: [
		BrowserAnimationsModule,
		CommonModule,
		DialogModule,
		ButtonModule
	],
	declarations: [EditProjectComponent],
	exports: [EditProjectComponent]
})
export class EditProjectModule { }
