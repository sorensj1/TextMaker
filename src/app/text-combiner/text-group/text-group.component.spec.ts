import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TextGroupComponent } from './text-group.component';
import { group } from '@angular/animations';

describe('TextGroupComponent', () => {
	let component: TextGroupComponent;
	let fixture: ComponentFixture<TextGroupComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ButtonModule, InputTextModule, FormsModule],
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
});
