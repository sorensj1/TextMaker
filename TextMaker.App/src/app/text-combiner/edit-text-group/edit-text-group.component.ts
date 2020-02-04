import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TextItemGroup, TextItem } from 'src/app/shared/models';

@Component({
	selector: 'text-maker-edit-text-group',
	templateUrl: './edit-text-group.component.html',
	styleUrls: ['./edit-text-group.component.scss']
})
export class EditTextGroupComponent {
	@Input() isFirst: boolean;
	@Input() isLast: boolean;
	@Input() group: TextItemGroup;

	@Output() groupChange = new EventEmitter<TextItemGroup>();
	@Output() groupMoveUp = new EventEmitter<TextItemGroup>();
	@Output() groupMoveDown = new EventEmitter<TextItemGroup>();
	@Output() groupAdd = new EventEmitter<TextItemGroup>();
	@Output() groupDelete = new EventEmitter<TextItemGroup>();

	isDialogShown = false;
	isAdding = false;
	selectedItem: TextItem = null;
	private itemToSave: TextItem = null;

	constructor() { }

	onTextItemEdit(item: TextItem) {
		this.itemToSave = item;
		this.selectedItem = <TextItem>{
			name: item.name,
			text: item.text
		};
		this.isAdding = false;
		this.isDialogShown = true;
	}

	onTextItemAdd() {
		this.selectedItem = <TextItem>{
			name: 'New Item',
			text: ''
		};
		this.isAdding = true;
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
					this.group.items.splice(index, 1);
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
