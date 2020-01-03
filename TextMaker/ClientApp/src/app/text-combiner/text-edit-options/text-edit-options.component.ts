import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-text-edit-options',
	templateUrl: './text-edit-options.component.html',
	styleUrls: ['./text-edit-options.component.scss']
})
export class TextEditOptionsComponent {

	@Output() closed = new EventEmitter<boolean>();

	constructor() { }

	onOkClick() {
		this.closed.emit(true);
	}

	onCancelClick() {
		this.closed.emit(false);
	}

}
