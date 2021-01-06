import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTextItemComponent } from './edit-text-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TextItem } from 'src/app/shared/models';

describe('EditTextItemComponent', () => {
	let component: EditTextItemComponent;
	let fixture: ComponentFixture<EditTextItemComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [BrowserAnimationsModule, CommonModule, DialogModule, ButtonModule, InputTextModule, FormsModule],
			declarations: [EditTextItemComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EditTextItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('#onDeleteClick', () => {
		it('should close the dialog with a change and set the group to null', () => {
			let wasDialogCalled = false;
			let wasItemCalled = false;
			let emitDialogVal = false;
			let emitItemVal = <TextItem>{
				name: 'Test',
				text: 'Test'
			};
			component.isDisplayed = true;
			component.dialogClosed.subscribe(val => {
				wasDialogCalled = true;
				emitDialogVal = val;
			});
			component.itemChange.subscribe(val => {
				wasItemCalled = true;
				emitItemVal = val;
			});
			component.onDeleteClick();
			expect(wasDialogCalled).toBe(true);
			expect(wasItemCalled).toBe(true);
			expect(emitDialogVal).toBe(true);
			expect(emitItemVal).toBe(null);
		});
	});

	describe('#onYesClick', () => {
		it('should close the dialog with a change', () => {
			let wasCalled = false;
			let emitVal = false;
			component.isDisplayed = true;
			component.dialogClosed.subscribe(val => {
				wasCalled = true;
				emitVal = val;
			});
			component.onYesClick();
			expect(wasCalled).toBe(true);
			expect(emitVal).toBe(true);
		});
	});

	describe('#onNoClick', () => {
		it('should close the dialog without a change', () => {
			let wasCalled = false;
			let emitVal = false;
			component.isDisplayed = true;
			component.dialogClosed.subscribe(val => {
				wasCalled = true;
				emitVal = val;
			});
			component.onNoClick();
			expect(wasCalled).toBe(true);
			expect(emitVal).toBe(false);
		});
	});

	describe('#onKeyPress', () => {
		it('should save if enter is pressed', () => {
			component.isDisplayed = true;

			let wasCalled = false;
			let emitVal = false;
			component.isDisplayed = true;
			component.dialogClosed.subscribe(val => {
				wasCalled = true;
				emitVal = val;
			});

			component.onKeyPress(<KeyboardEvent>{ key: 'Esc' });
			expect(wasCalled).toBe(false);
			expect(emitVal).toBe(false);

			component.onKeyPress(<KeyboardEvent>{ key: 'Enter' });
			expect(wasCalled).toBe(true);
			expect(emitVal).toBe(true);
		});
	});
});
