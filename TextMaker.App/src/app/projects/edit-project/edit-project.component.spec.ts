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
		it('should close the dialog and save the project', () => {
			component.isDisplayed = true;
			component.name = 'test';
			let emittedName = '';
			component.projectSaved.subscribe(projName => {
				emittedName = projName;
			});
			component.onYesClick();

			expect(emittedName).toBe('test');
			component.projectSaved.unsubscribe();
			expect(component.isDisplayed).toBe(false);
		});
	});

	describe('#onNoClick', () => {
		it('should close the dialog', () => {
			component.isDisplayed = true;
			component.name = 'test';
			let emittedName = '';
			component.projectSaved.subscribe(projName => {
				emittedName = projName;
			});
			component.onNoClick();

			expect(emittedName).toBe('');
			component.projectSaved.unsubscribe();
			expect(component.isDisplayed).toBe(false);
		});
	});

	describe('#onKeyPress', () => {
		it('should save if enter is pressed', () => {
			component.isDisplayed = true;

			component.onKeyPress(<KeyboardEvent>{ key: 'Esc' });
			expect(component.isDisplayed).toBe(true);

			component.onKeyPress(<KeyboardEvent>{ key: 'Enter' });
			expect(component.isDisplayed).toBe(false);
		});
	});
});
