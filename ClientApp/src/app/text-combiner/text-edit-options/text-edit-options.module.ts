import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TextEditOptionsComponent } from './text-edit-options.component';

@NgModule({
	imports: [
		CommonModule,
		ButtonModule
	],
	declarations: [TextEditOptionsComponent],
	exports: [TextEditOptionsComponent]
})
export class TextEditOptionsModule { }
