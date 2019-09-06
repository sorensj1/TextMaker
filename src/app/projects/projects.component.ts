import { Component, OnInit } from '@angular/core';
import { TextDataService } from '../shared/services';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

	projectNames: string[] = [];
	isDialogShown = false;

	constructor(
		private textDataService: TextDataService
	) { }

	ngOnInit() {
		this.projectNames = this.textDataService.getKeys();
	}

	onAddClick() {
		this.isDialogShown = true;
	}
}
