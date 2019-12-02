import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { TextDataService } from '../shared/services';
import { Project } from '../shared/models';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

	projectNames: string[] = [];
	isDialogShown = false;

	constructor(
		private textDataService: TextDataService,
		private messageService: MessageService
	) { }

	ngOnInit() {
		this.projectNames = this.textDataService.getKeys();
	}

	onAddClick() {
		this.isDialogShown = true;
	}

	onProjectSaved(projectName: string) {
		if (this.textDataService.create(<Project>{
			name: projectName,
			groups: [],
			isDateSelected: false,
			isAutomaticallyCopied: true,
			delimiter: ''
		})) {
			this.projectNames = this.textDataService.getKeys();
		} else {
			this.messageService.add({ severity: 'error', summary: 'Error', detail: `Could not create the new project: ${projectName}.` });
		}
	}
}
