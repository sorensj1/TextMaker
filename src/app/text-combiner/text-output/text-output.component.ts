import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'app-text-output',
	templateUrl: './text-output.component.html',
	styleUrls: ['./text-output.component.scss']
})
export class TextOutputComponent implements OnInit {

	@Input() text: string;

	@ViewChild('textResult', { static: true }) textResult: ElementRef;

	constructor() { }

	ngOnInit() {
	}

	copyToClipboard() {
		navigator.clipboard.writeText(this.text).then(function() {
			/* copied to clipboard */
		}, function() {
			/* clipboard write failed, try exec command instead */
			this.textResult.nativeElement.select();
			document.execCommand('copy');
		});
	}
}
