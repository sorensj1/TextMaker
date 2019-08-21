import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TextOutputComponent } from './text-output.component';

describe('TextOutputComponent', () => {
	let component: TextOutputComponent;
	let fixture: ComponentFixture<TextOutputComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ButtonModule, CardModule],
			declarations: [TextOutputComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TextOutputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be truthy', () => {
		expect(component).toBeTruthy();
	});
});
