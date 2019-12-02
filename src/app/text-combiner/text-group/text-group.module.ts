import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TextGroupComponent } from './text-group.component';

@NgModule({
	imports: [
		CommonModule,
		ButtonModule,
		InputTextModule,
		FormsModule
	],
	declarations: [TextGroupComponent],
	exports: [TextGroupComponent]
})
export class TextGroupModule { }
