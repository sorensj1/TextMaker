import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-text-edit-options',
	templateUrl: './text-edit-options.component.html',
	styleUrls: ['./text-edit-options.component.scss']
})
export class TextEditOptionsComponent {

	@Output() closed = new EventEmitter();

	constructor() { }

	onOkClick() {
		this.closed.emit();
	}

	onCancelClick() {
		this.closed.emit();
	}

}
