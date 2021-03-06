import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Project, TextItemGroup } from '../shared/models';
import { TextDataService, FormatDateService } from '../shared/services';
import { TextCombinerService } from './text-combiner.service';

@Component({
	selector: 'text-maker-text-combiner',
	templateUrl: './text-combiner.component.html',
	styleUrls: ['./text-combiner.component.scss']
})
export class TextCombinerComponent implements OnInit {
	project: Project;
	combinedText = '';
	date = '';
	isEditing = false;
	private name = '';

	constructor(
		private route: ActivatedRoute,
		private textDataService: TextDataService,
		private formatDateService: FormatDateService,
		private textCombinerService: TextCombinerService
	) { }

	ngOnInit() {
		this.name = this.route.snapshot.paramMap.get('name');
		this.textDataService.get(this.name, project => {
			this.project = project;
			this.setText();
		});
		this.date = this.formatDateService.format(new Date());
	}

	onGroupChange() {
		this.setText();
	}

	onGroupMoveUp(group: TextItemGroup) {
		const index = this.project.groups.indexOf(group);
		this.swapGroups(index, index - 1);
	}

	onGroupMoveDown(group: TextItemGroup) {
		const index = this.project.groups.indexOf(group);
		this.swapGroups(index, index + 1);
	}

	onGroupAdd(group: TextItemGroup) {
		const index = this.project.groups.indexOf(group);
		const newGroup: TextItemGroup = {
			name: 'New Group',
			items: [],
			isExclusive: false,
			delimiter: '',
			isOnNewLine: false
		};
		this.project.groups.splice(index + 1, 0, newGroup);
	}

	onGroupDelete(group: TextItemGroup) {
		const index = this.project.groups.indexOf(group);
		this.project.groups.splice(index, 1);

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
			this.textDataService.update(this.name, this.project, () => { });
		}
	}

	private setText() {
		this.combinedText = this.textCombinerService.getCombinedText(this.project);
	}

	private swapGroups(index1: number, index2: number) {
		const temp = this.project.groups[index1];
		this.project.groups[index1] = this.project.groups[index2];
		this.project.groups[index2] = temp;
	}
}
