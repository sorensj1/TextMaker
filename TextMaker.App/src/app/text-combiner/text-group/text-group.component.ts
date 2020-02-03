import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { TextItemGroup, TextItem } from 'src/app/shared/models';
import { stringify } from 'querystring';

@Component({
	selector: 'text-maker-text-group',
	templateUrl: './text-group.component.html',
	styleUrls: ['./text-group.component.scss']
})
export class TextGroupComponent {

	@Input() group: TextItemGroup;

	@Output() groupChange = new EventEmitter<TextItemGroup>();

	constructor() { }

	onTextItemClick(item: TextItem) {
		item.isSelected = !item.isSelected;
		if (this.group.isExclusive) {
			this.group.items.forEach(i => {
				if (i !== item) {
					i.isSelected = false;
				}
			});
		}
		this.groupChange.emit(this.group);
	}
}
