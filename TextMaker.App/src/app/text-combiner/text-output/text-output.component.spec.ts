import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TextOutputComponent } from './text-output.component';

describe('TextOutputComponent', () => {
	let component: TextOutputComponent;
	let fixture: ComponentFixture<TextOutputComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule, ButtonModule, InputTextareaModule],
			declarations: [TextOutputComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TextOutputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('#text', () => {
		it('should just set the text when not auto-copying', () => {
			const copySpy = spyOn(component, 'copyToClipboard');
			component.isAutoCopying = false;
			component.text = 'my text result';
			expect(copySpy).not.toHaveBeenCalled();
			expect(component.text).toBe('my text result');
		});

		it('should set the text and auto-copy', () => {
			const copySpy = spyOn(component, 'copyToClipboard');
			component.isAutoCopying = true;
			component.text = 'my text result';
			expect(copySpy).toHaveBeenCalled();
			expect(component.text).toBe('my text result');
		});
	});

	describe('#copyToClipboard', () => {
		it('should copy using the clipboard API', () => {
			const clipboardSpy = spyOn(navigator.clipboard, 'writeText').and.returnValue(Promise.resolve());
			component.isAutoCopying = false;
			component.text = 'some text to copy';
			component.copyToClipboard();
			expect(clipboardSpy).toHaveBeenCalledWith('some text to copy');
		});
	});
});
