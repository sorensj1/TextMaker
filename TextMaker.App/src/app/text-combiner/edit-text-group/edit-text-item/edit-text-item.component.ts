import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TextItem } from 'src/app/shared/models';

@Component({
	selector: 'text-maker-edit-text-item',
	templateUrl: './edit-text-item.component.html',
	styleUrls: ['./edit-text-item.component.scss']
})
export class EditTextItemComponent implements OnInit {

	@Input() isDisplayed = false;

	@Input() item: TextItem = null;

	@Input() isNew = false;

	@Output() itemChange = new EventEmitter<TextItem>();

	@Output() dialogClosed = new EventEmitter<boolean>();

	constructor() { }

	ngOnInit() {
	}

	onDeleteClick() {
		this.itemChange.emit(null);
		this.dialogClosed.emit(true);
	}

	onYesClick() {
		this.dialogClosed.emit(true);
	}

	onNoClick() {
		this.dialogClosed.emit(false);
	}

	onKeyPress(event: KeyboardEvent) {
		if (event.key === "Enter") {
			this.dialogClosed.emit(true);
		}
	}
}
