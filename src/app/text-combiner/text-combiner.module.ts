import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextCombinerComponent } from './text-combiner.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [TextCombinerComponent],
	exports: [TextCombinerComponent]
})
export class TextCombinerModule { }
