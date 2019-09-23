import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditProjectComponent } from './edit-project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

describe('EditProjectComponent', () => {
	let component: EditProjectComponent;
	let fixture: ComponentFixture<EditProjectComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [BrowserAnimationsModule, CommonModule, DialogModule, ButtonModule, InputTextModule, FormsModule],
			declarations: [EditProjectComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EditProjectComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('#onYesClick', () => {
		it('should set the dialog to appear', () => {
			component.isDisplayed = true;
			component.onYesClick();
			expect(component.isDisplayed).toBe(false);
		});
	});

	describe('#onNoClick', () => {
		it('should set the dialog to appear', () => {
			component.isDisplayed = true;
			component.onNoClick();
			expect(component.isDisplayed).toBe(false);
		});
	});
});
