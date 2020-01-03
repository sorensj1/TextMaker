import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TextCombinerComponent } from './text-combiner.component';
import { TextGroupModule } from './text-group';
import { TextOutputModule } from './text-output';
import { EditTextGroupModule } from './edit-text-group';
import { TextEditOptionsModule } from './text-edit-options';
import { TextCombinerService } from './text-combiner.service';

@NgModule({
	imports: [
		CommonModule,
		ButtonModule,
		TextGroupModule,
		EditTextGroupModule,
		TextOutputModule,
		TextEditOptionsModule
	],
	declarations: [
		TextCombinerComponent
	],
	exports: [
		TextCombinerComponent
	],
	providers: [
		TextCombinerService
	]
})
export class TextCombinerModule { }
