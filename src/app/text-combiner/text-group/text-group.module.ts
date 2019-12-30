import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { EditTextItemModule } from './edit-text-item';
import { TextGroupComponent } from './text-group.component';

@NgModule({
	imports: [
		CommonModule,
		ButtonModule,
		InputTextModule,
		FormsModule,
		EditTextItemModule
	],
	declarations: [TextGroupComponent],
	exports: [TextGroupComponent]
})
export class TextGroupModule { }
