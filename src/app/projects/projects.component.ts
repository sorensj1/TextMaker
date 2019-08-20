import { Component, OnInit } from '@angular/core';
import { TextDataService } from '../shared/services';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

	projectNames: string[] = [];

	constructor(
		private textDataService: TextDataService
	) { }

	ngOnInit() {
		this.projectNames = this.textDataService.getKeys();
	}
}
