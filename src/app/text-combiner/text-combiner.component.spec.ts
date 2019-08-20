import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { TextCombinerComponent } from './text-combiner.component';
import { TextDataService } from '../shared/services';

describe('TextCombinerComponent', () => {
	let component: TextCombinerComponent;
	let fixture: ComponentFixture<TextCombinerComponent>;

	const myProject = {
		name: 'My Project'
	};

	const activatedRoute = {
		snapshot: {
			paramMap: {
				get: jasmine.createSpy('get').and.returnValue('MyProjectName')
			}
		}
	};

	const textDataService = {
		get: jasmine.createSpy('get').and.returnValue(myProject)
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TextCombinerComponent],
			providers: [
				{ provide: ActivatedRoute, useValue: activatedRoute },
				{ provide: TextDataService, useValue: textDataService }
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TextCombinerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(activatedRoute.snapshot.paramMap.get).toHaveBeenCalledWith('name');
		expect(textDataService.get).toHaveBeenCalledWith('MyProjectName');
		expect(component.project.name).toBe('My Project');
	});
});
