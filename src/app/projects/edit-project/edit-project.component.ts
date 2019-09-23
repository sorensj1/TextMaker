import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-edit-project',
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
}
