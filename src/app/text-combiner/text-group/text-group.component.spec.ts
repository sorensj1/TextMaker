import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { EditTextItemModule } from './edit-text-item';
import { TextGroupComponent } from './text-group.component';
import { TextItem, TextItemGroup } from 'src/app/shared/models';

describe('TextGroupComponent', () => {
	let component: TextGroupComponent;
	let fixture: ComponentFixture<TextGroupComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ButtonModule, InputTextModule, FormsModule, EditTextItemModule],
			declarations: [TextGroupComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TextGroupComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('#onTextItemClick', () => {
		it('should swap the items selected state', () => {
			const item = {
				name: 'My Item',
				text: 'This is my item.',
				isSelected: false
			};
			component.group = {
				name: '',
				items: [],
				delimiter: '',
				isExclusive: false
			};

			component.onTextItemClick(item);
			expect(item.isSelected).toBe(true);

			component.onTextItemClick(item);
			expect(item.isSelected).toBe(false);
		});

		it('should respect the isExclusive flag', () => {
			const items = [
				{
					name: 'Item 1',
					text: 'This is item 1.',
					isSelected: true
				},
				{
					name: 'Item 2',
					text: 'This is item 2.',
					isSelected: false
				},
				{
					name: 'Item 3',
					text: 'This is item 3.',
					isSelected: false
				}
			];
			component.group = {
				name: '',
				items: items,
				delimiter: '',
				isExclusive: false
			};

			component.onTextItemClick(items[1]);
			expect(items[0].isSelected).toBe(true);
			expect(items[1].isSelected).toBe(true);
			expect(items[2].isSelected).toBe(false);

			component.group.isExclusive = true;
			component.onTextItemClick(items[2]);
			expect(items[0].isSelected).toBe(false);
			expect(items[1].isSelected).toBe(false);
			expect(items[2].isSelected).toBe(true);
		});
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
});
