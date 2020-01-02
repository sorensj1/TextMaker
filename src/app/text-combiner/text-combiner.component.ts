import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Project } from '../shared/models';
import { TextDataService } from '../shared/services';
import { TextCombinerService } from './text-combiner.service';

@Component({
	selector: 'app-text-combiner',
	templateUrl: './text-combiner.component.html',
	styleUrls: ['./text-combiner.component.scss']
})
export class TextCombinerComponent implements OnInit {

	project: Project;

	combinedText = '';

	date = '';

	isEditing = false;

	constructor(
		private route: ActivatedRoute,
		private textDataService: TextDataService,
		private textCombinerService: TextCombinerService
	) { }

	ngOnInit() {
		const name = this.route.snapshot.paramMap.get('name');
		this.project = this.textDataService.get(name);
		this.setText();
		this.date = new Date().toISOString().slice(0, 10);
	}

	onGroupChange() {
		this.setText();
	}

	onDateClick() {
		this.project.isDateSelected = !this.project.isDateSelected;
		this.setText();
	}

	onEditClick() {
		this.isEditing = true;
	}

	onEditorClosed(wasEdited: boolean) {
		this.isEditing = false;
		if (wasEdited) {
			this.setText();
		}
	}

	private setText() {
		this.combinedText = this.textCombinerService.getCombinedText(this.project);
	}
}
