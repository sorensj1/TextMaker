import { Component, OnInit, Input } from '@angular/core';
import { TextItemGroup, TextItem } from 'src/app/shared/models';

@Component({
	selector: 'app-text-group',
	templateUrl: './text-group.component.html',
	styleUrls: ['./text-group.component.scss']
})
export class TextGroupComponent implements OnInit {

	@Input() group: TextItemGroup;

	constructor() { }

	ngOnInit() {
	}

	onTextItemClick(item: TextItem) {
		item.isSelected = !item.isSelected;
	}

}
