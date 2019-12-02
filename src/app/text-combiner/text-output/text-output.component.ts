import { Component, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'app-text-output',
	templateUrl: './text-output.component.html',
	styleUrls: ['./text-output.component.scss']
})
export class TextOutputComponent {

	@Input() text: string;

	@ViewChild('textResult', { static: true }) textResult: ElementRef;

	constructor() { }

	copyToClipboard() {
		navigator.clipboard.writeText(this.text);
	}
}
