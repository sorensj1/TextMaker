import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { EditTextItemModule } from './edit-text-item';
import { EditTextGroupComponent } from './edit-text-group.component';

@NgModule({
	imports: [
		CommonModule,
		ButtonModule,
		InputTextModule,
		FormsModule,
		EditTextItemModule
	],
	declarations: [EditTextGroupComponent],
	exports: [EditTextGroupComponent]
})
export class EditTextGroupModule { }
