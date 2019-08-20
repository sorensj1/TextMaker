import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Project } from '../shared/models';
import { TextDataService } from '../shared/services';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-text-combiner',
	templateUrl: './text-combiner.component.html',
	styleUrls: ['./text-combiner.component.scss']
})
export class TextCombinerComponent implements OnInit {

	project: Project;

	constructor(
		private route: ActivatedRoute,
		private textDataService: TextDataService
	) { }

	ngOnInit() {
		const name = this.route.snapshot.paramMap.get('name');
		this.project = this.textDataService.get(name);
	}
}
