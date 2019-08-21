import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonModule } from 'primeng/button';
import { TextGroupComponent } from './text-group.component';

describe('TextGroupComponent', () => {
	let component: TextGroupComponent;
	let fixture: ComponentFixture<TextGroupComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ButtonModule],
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

			component.onTextItemClick(item);
			expect(item.isSelected).toBe(true);

			component.onTextItemClick(item);
			expect(item.isSelected).toBe(false);
		});
	});
});
