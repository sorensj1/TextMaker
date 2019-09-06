import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-edit-project',
	templateUrl: './edit-project.component.html',
	styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

	@Input() isDisplayed: boolean;

	@Output() isDisplayedChange = new EventEmitter<boolean>();

	constructor() { }

	ngOnInit() {
	}

	onYesClick() {
		this.isDisplayed = false;
		this.isDisplayedChange.emit(this.isDisplayed);
	}

	onNoCLick() {
		this.isDisplayed = false;
		this.isDisplayedChange.emit(this.isDisplayed);
	}
}
