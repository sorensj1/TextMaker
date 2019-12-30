import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TextItem } from 'src/app/shared/models';

@Component({
	selector: 'app-edit-text-item',
	templateUrl: './edit-text-item.component.html',
	styleUrls: ['./edit-text-item.component.scss']
})
export class EditTextItemComponent implements OnInit {

	@Input() isDisplayed = false;

	@Input() item: TextItem = null;

	@Output() dialogClosed = new EventEmitter<boolean>();

	constructor() { }

	ngOnInit() {
	}

	onYesClick() {
		this.dialogClosed.emit(true);
	}

	onNoClick() {
		this.dialogClosed.emit(false);
	}
}
