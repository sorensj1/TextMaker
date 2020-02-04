import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { TextDataService } from '../shared/services';
import { Project } from '../shared/models';

@Component({
	selector: 'text-maker-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

	projectNames: string[] = [];
	isDialogShown = false;

	constructor(
		private messageService: MessageService,
		private textDataService: TextDataService
	) { }

	ngOnInit() {
		this.setProjectNames();
	}

	onAddClick() {
		this.isDialogShown = true;
	}

	onProjectSaved(projectName: string) {
		this.textDataService.create(<Project>{
			name: projectName,
			groups: [],
			isDateSelected: false,
			isAutomaticallyCopied: true,
			delimiter: ''
		}, result => {
			if (result) {
				this.messageService.add({ severity: 'error', summary: 'Error', detail: result });
			}
			this.setProjectNames();
		});
	}

	private setProjectNames() {
		this.textDataService.getKeys(keys => this.projectNames = keys);
	}
}
