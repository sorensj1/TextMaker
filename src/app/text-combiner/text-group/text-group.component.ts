import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TextItemGroup, TextItem } from 'src/app/shared/models';

@Component({
	selector: 'app-text-group',
	templateUrl: './text-group.component.html',
	styleUrls: ['./text-group.component.scss']
})
export class TextGroupComponent {

	@Input() isEditing: boolean;

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
