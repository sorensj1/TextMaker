import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTextItemComponent } from './edit-text-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

describe('EditProjectComponent', () => {
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

	describe('#onYesClick', () => {
		it('should set the dialog to appear', () => {
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
		it('should set the dialog to appear', () => {
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
});
