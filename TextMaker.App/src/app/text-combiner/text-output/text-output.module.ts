import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea'
import { TextOutputComponent } from './text-output.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ButtonModule,
		InputTextareaModule
	],
	declarations: [TextOutputComponent],
	exports: [TextOutputComponent]
})
export class TextOutputModule { }
