import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-text-output',
	templateUrl: './text-output.component.html',
	styleUrls: ['./text-output.component.scss']
})
export class TextOutputComponent implements OnInit {

	@Input() text: string;

	constructor() { }

	ngOnInit() {
	}

}
