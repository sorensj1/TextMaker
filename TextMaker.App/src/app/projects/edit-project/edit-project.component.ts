import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'text-maker-edit-project',
	templateUrl: './edit-project.component.html',
	styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

	@Input() isDisplayed = false;

	@Output() isDisplayedChange = new EventEmitter<boolean>();

	@Output() projectSaved = new EventEmitter<string>();

	name = '';

	constructor() { }

	ngOnInit() {
	}

	onYesClick() {
		this.isDisplayed = false;
		this.isDisplayedChange.emit(this.isDisplayed);

		this.projectSaved.emit(this.name);
	}

	onNoClick() {
		this.isDisplayed = false;
		this.isDisplayedChange.emit(this.isDisplayed);
	}

	onKeyPress(event: KeyboardEvent) {
		if (event.key === "Enter") {
			this.onYesClick();
		}
	}
}
