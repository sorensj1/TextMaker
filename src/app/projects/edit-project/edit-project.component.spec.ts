import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditProjectComponent } from './edit-project.component';

describe('EditProjectComponent', () => {
	let component: EditProjectComponent;
	let fixture: ComponentFixture<EditProjectComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
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
			expect(component.isDisplayed).toBe(false);
			component.onYesClick();
			expect(component.isDisplayed).toBe(true);
		});
	});

	describe('#onNoClick', () => {
		it('should set the dialog to appear', () => {
			expect(component.isDisplayed).toBe(false);
			component.onNoClick();
			expect(component.isDisplayed).toBe(true);
		});
	});
});
