import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TextGroupComponent } from './text-group.component';

@NgModule({
	imports: [
		CommonModule,
		ButtonModule
	],
	declarations: [TextGroupComponent],
	exports: [TextGroupComponent]
})
export class TextGroupModule { }
