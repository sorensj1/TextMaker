import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TextCombinerComponent } from './text-combiner.component';
import { TextGroupModule } from './text-group';
import { TextOutputModule } from './text-output';
import { TextCombinerPipe } from './text-combiner.pipe';

@NgModule({
	imports: [
		CommonModule,
		ButtonModule,
		TextGroupModule,
		TextOutputModule
	],
	declarations: [
		TextCombinerComponent,
		TextCombinerPipe
	],
	exports: [
		TextCombinerComponent
	]
})
export class TextCombinerModule { }
