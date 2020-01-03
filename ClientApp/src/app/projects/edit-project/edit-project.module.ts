import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditProjectComponent } from './edit-project.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		BrowserAnimationsModule,
		CommonModule,
		DialogModule,
		ButtonModule,
		InputTextModule,
		FormsModule
	],
	declarations: [EditProjectComponent],
	exports: [EditProjectComponent]
})
export class EditProjectModule { }
