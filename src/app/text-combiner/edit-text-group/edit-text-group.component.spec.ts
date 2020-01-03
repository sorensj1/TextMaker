import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { EditTextItemModule } from './edit-text-item';
import { EditTextGroupComponent } from './edit-text-group.component';
import { TextItem, TextItemGroup } from 'src/app/shared/models';

describe('EditTextGroupComponent', () => {
	let component: EditTextGroupComponent;
	let fixture: ComponentFixture<EditTextGroupComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ButtonModule, InputTextModule, FormsModule, EditTextItemModule],
			declarations: [EditTextGroupComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EditTextGroupComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('#onTextItemEdit', () => {
		it('should edit an existing item', () => {
			const item1 = <TextItem>{
				name: 'Test Name',
				text: 'Test Text'
			};
			const item2 = <TextItem>{
				name: 'Another Name',
				text: 'Another Text'
			};
			component.group = <TextItemGroup>{
				items: [item1, item2]
			};

			expect(component.isDialogShown).toBe(false);
			component.onTextItemEdit(item1);
			expect(component.isDialogShown).toBe(true);
			expect(component.selectedItem.name).toBe('Test Name');
			expect(component.selectedItem.text).toBe('Test Text');

			component.selectedItem.name = 'Edited Name';
			component.selectedItem.text = 'Edited Text';

			component.onDialogClosed(false);
			expect(component.isDialogShown).toBe(false);
			expect(item1.name).toBe('Test Name');
			expect(item1.text).toBe('Test Text');
			expect(component.group.items[0]).toBe(item1);

			component.onTextItemEdit(item1);
			expect(component.isDialogShown).toBe(true);

			component.selectedItem.name = 'Edited Name';
			component.selectedItem.text = 'Edited Text';

			component.onDialogClosed(true);
			expect(component.isDialogShown).toBe(false);
			expect(item1.name).toBe('Edited Name');
			expect(item1.text).toBe('Edited Text');
			expect(component.group.items[0]).toBe(item2);
		});

		it('should delete an existing item', () => {
			const item1 = <TextItem>{
				name: 'Test Name',
				text: 'Test Text'
			};
			const item2 = <TextItem>{
				name: 'Another Name',
				text: 'Another Text'
			};
			component.group = <TextItemGroup>{
				items: [item1, item2]
			};

			expect(component.isDialogShown).toBe(false);
			component.onTextItemEdit(item1);
			expect(component.isDialogShown).toBe(true);
			expect(component.selectedItem.name).toBe('Test Name');
			expect(component.selectedItem.text).toBe('Test Text');

			component.selectedItem = null;
			component.onDialogClosed(true);
			expect(component.isDialogShown).toBe(false);
			expect(component.group.items.length).toBe(1);
			expect(component.group.items[0]).toBe(item2);
		});
	});

	describe('#onTextItemAdd', () => {
		it('should add a new text item', () => {
			const item1 = <TextItem>{
				name: 'Test Name',
				text: 'Test Text'
			};
			const item2 = <TextItem>{
				name: 'Another Name',
				text: 'Another Text'
			};
			component.group = <TextItemGroup>{
				items: [item1, item2]
			};

			expect(component.isDialogShown).toBe(false);
			component.onTextItemAdd();
			expect(component.isDialogShown).toBe(true);
			expect(component.selectedItem.name).toBe('New Item');
			expect(component.selectedItem.text).toBe('');

			component.selectedItem.name = 'New Name';
			component.selectedItem.text = 'New Text';

			component.onDialogClosed(false);
			expect(component.isDialogShown).toBe(false);
			expect(component.group.items.length).toBe(2);

			component.onTextItemAdd();
			expect(component.isDialogShown).toBe(true);

			component.selectedItem.name = 'New Name';
			component.selectedItem.text = 'New Text';

			component.onDialogClosed(true);
			expect(component.isDialogShown).toBe(false);
			expect(component.group.items.length).toBe(3);
			expect(component.group.items[0].name).toBe('Another Name');
			expect(component.group.items[0].text).toBe('Another Text');
			expect(component.group.items[1].name).toBe('New Name');
			expect(component.group.items[1].text).toBe('New Text');
			expect(component.group.items[2].name).toBe('Test Name');
			expect(component.group.items[2].text).toBe('Test Text');
		});
	});

	describe('#onGroupMoveUp', () => {
		it('should invoke a call to move up', () => {
			let wasCalled = false;
			let emitVal = null;
			component.group = <TextItemGroup>{
				name: 'Test',
				items: [],
				isExclusive: false,
				delimiter: '',
				isOnNewLine: false
			};
			component.groupMoveUp.subscribe(val => {
				wasCalled = true;
				emitVal = val;
			});
			component.onGroupMoveUp();
			expect(wasCalled).toBe(true);
			expect(emitVal).toBe(component.group);
		});
	});

	describe('#onGroupMoveDown', () => {
		it('should invoke a call to move down', () => {
			let wasCalled = false;
			let emitVal = null;
			component.group = <TextItemGroup>{
				name: 'Test',
				items: [],
				isExclusive: false,
				delimiter: '',
				isOnNewLine: false
			};
			component.groupMoveDown.subscribe(val => {
				wasCalled = true;
				emitVal = val;
			});
			component.onGroupMoveDown();
			expect(wasCalled).toBe(true);
			expect(emitVal).toBe(component.group);
		});
	});

	describe('#onGroupAdd', () => {
		it('should invoke a call to add', () => {
			let wasCalled = false;
			let emitVal = null;
			component.group = <TextItemGroup>{
				name: 'Test',
				items: [],
				isExclusive: false,
				delimiter: '',
				isOnNewLine: false
			};
			component.groupAdd.subscribe(val => {
				wasCalled = true;
				emitVal = val;
			});
			component.onGroupAdd();
			expect(wasCalled).toBe(true);
			expect(emitVal).toBe(component.group);
		});
	});

	describe('#onGroupDelete', () => {
		it('should invoke a call to delete', () => {
			let wasCalled = false;
			let emitVal = null;
			component.group = <TextItemGroup>{
				name: 'Test',
				items: [],
				isExclusive: false,
				delimiter: '',
				isOnNewLine: false
			};
			component.groupDelete.subscribe(val => {
				wasCalled = true;
				emitVal = val;
			});
			component.onGroupDelete();
			expect(wasCalled).toBe(true);
			expect(emitVal).toBe(component.group);
		});
	});
});
