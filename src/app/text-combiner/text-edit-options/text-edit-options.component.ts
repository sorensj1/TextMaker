import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-text-edit-options',
	templateUrl: './text-edit-options.component.html',
	styleUrls: ['./text-edit-options.component.scss']
})
export class TextEditOptionsComponent implements OnInit {

	@Output() closed = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

	onOkClick() {
		this.closed.emit();
	}

	onCancelClick() {
		this.closed.emit();
	}

}
