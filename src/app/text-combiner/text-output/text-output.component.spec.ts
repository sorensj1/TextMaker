import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextOutputComponent } from './text-output.component';

describe('TextOutputComponent', () => {
	let component: TextOutputComponent;
	let fixture: ComponentFixture<TextOutputComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule, ButtonModule, InputTextModule],
			declarations: [TextOutputComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TextOutputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('#copyToClipboard', () => {
		it('should copy using the clipboard API', () => {
			const clipboardSpy = spyOn(navigator.clipboard, 'writeText').and.returnValue(Promise.resolve());
			component.text = 'some text to copy';
			component.copyToClipboard();
			expect(clipboardSpy).toHaveBeenCalledWith('some text to copy');
		});
	});
});
