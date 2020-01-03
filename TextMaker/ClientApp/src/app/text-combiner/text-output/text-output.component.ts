import { Component, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'app-text-output',
	templateUrl: './text-output.component.html',
	styleUrls: ['./text-output.component.scss']
})
export class TextOutputComponent {

	@Input() set text(textVal: string) {
		this.textVal = textVal;
		if (this.isAutoCopying) {
			this.copyToClipboard();
		}
	}

	get text() {
		return this.textVal;
	}

	@ViewChild('textResult', { static: true }) textResult: ElementRef;

	isAutoCopying = true;

	private textVal = '';

	constructor() { }

	copyToClipboard() {
		navigator.clipboard.writeText(this.text);
	}
}
