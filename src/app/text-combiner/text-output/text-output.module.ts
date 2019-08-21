import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TextOutputComponent } from './text-output.component';

@NgModule({
	imports: [
		CommonModule,
		ButtonModule,
		CardModule
	],
	declarations: [TextOutputComponent],
	exports: [TextOutputComponent]
})
export class TextOutputModule { }
