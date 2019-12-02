import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonModule } from 'primeng/button';
import { TextEditOptionsComponent } from './text-edit-options.component';
import { EventEmitter } from '@angular/core';

describe('TextEditOptionsComponent', () => {
	let component: TextEditOptionsComponent;
	let fixture: ComponentFixture<TextEditOptionsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ButtonModule],
			declarations: [TextEditOptionsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TextEditOptionsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('onOkClick', () => {
		it('should emit the closed event', () => {
			let wasCalled = false;
			component.closed = new EventEmitter();
			component.closed.subscribe(() => wasCalled = true);

			component.onOkClick();
			component.closed.complete();

			expect(wasCalled).toBe(true);
		});
	});

	describe('onCancelClick', () => {
		it('should emit the closed event', () => {
			let wasCalled = false;
			component.closed = new EventEmitter();
			component.closed.subscribe(() => wasCalled = true);

			component.onCancelClick();
			component.closed.complete();

			expect(wasCalled).toBe(true);
		});
	});

	it('should be truthy', () => {
		expect(component).toBeTruthy();
	});
});
