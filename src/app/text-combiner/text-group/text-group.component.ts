import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { TextItemGroup, TextItem } from 'src/app/shared/models';
import { stringify } from 'querystring';

@Component({
	selector: 'app-text-group',
	templateUrl: './text-group.component.html',
	styleUrls: ['./text-group.component.scss']
})
export class TextGroupComponent {

	@Input() isEditing: boolean;

	@Input() isFirst: boolean;

	@Input() isLast: boolean;

	@Input() group: TextItemGroup;

	@Output() groupChange = new EventEmitter<TextItemGroup>();

	@Output() groupMoveUp = new EventEmitter<TextItemGroup>();

	@Output() groupMoveDown = new EventEmitter<TextItemGroup>();

	@Output() groupAdd = new EventEmitter<TextItemGroup>();

	@Output() groupDelete = new EventEmitter<TextItemGroup>();

	isDialogShown = false;

	selectedItem: TextItem = null;

	private itemToSave: TextItem = null;

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

	onTextItemEdit(item: TextItem) {
		this.itemToSave = item;
		this.selectedItem = <TextItem>{
			name: item.name,
			text: item.text
		};
		this.isDialogShown = true;
	}

	onTextItemAdd() {
		this.selectedItem = <TextItem>{
			name: 'New Item',
			text: ''
		};
		this.isDialogShown = true;
	}

	onGroupMoveUp() {
		this.groupMoveUp.emit(this.group);
	}

	onGroupMoveDown() {
		this.groupMoveDown.emit(this.group);
	}

	onGroupAdd() {
		this.groupAdd.emit(this.group);
	}

	onGroupDelete() {
		this.groupDelete.emit(this.group);
	}

	onDialogClosed(wasEdited: boolean) {
		if (wasEdited) {
			if (this.itemToSave) {
				if (this.selectedItem) {
					this.itemToSave.name = this.selectedItem.name;
					this.itemToSave.text = this.selectedItem.text;
				} else {
					const index = this.group.items.indexOf(this.itemToSave);
					if (index > -1) {
						this.group.items.splice(index, 1);
					}
				}
			} else {
				this.group.items.push(this.selectedItem);
			}
			this.group.items.sort((a, b) => a.name.localeCompare(b.name));
		}
		this.itemToSave = null;
		this.selectedItem = null;
		this.isDialogShown = false;
	}
}
