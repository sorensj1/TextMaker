import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { TextCombinerComponent } from './text-combiner.component';
import { TextDataService } from '../shared/services';
import { TextGroupModule } from './text-group';
import { TextOutputModule } from './text-output';
import { TextEditOptionsModule } from './text-edit-options';
import { TextCombinerService } from './text-combiner.service';

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

	const textCombinerService = {
		getCombinedText: jasmine.createSpy('getCombinedText').and.returnValue('combined text')
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [TextGroupModule, TextOutputModule, TextEditOptionsModule],
			declarations: [TextCombinerComponent],
			providers: [
				{ provide: ActivatedRoute, useValue: activatedRoute },
				{ provide: TextDataService, useValue: textDataService },
				{ provide: TextCombinerService, useValue: textCombinerService }
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TextCombinerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('#ngOnInit', () => {
		it('should create', () => {
			expect(activatedRoute.snapshot.paramMap.get).toHaveBeenCalledWith('name');
			expect(textDataService.get).toHaveBeenCalledWith('MyProjectName');
			expect(component.project.name).toBe('My Project');
		});
	});

	describe('#onGroupChange', () => {
		it('should handle a group change', () => {
			textCombinerService.getCombinedText.calls.reset();
			component.combinedText = '';
			component.onGroupChange();
			expect(textCombinerService.getCombinedText).toHaveBeenCalledWith(myProject);
			expect(component.combinedText).toBe('combined text');
		});
	});

	describe('#onEditClick', () => {
		it('should set isEditing to true', () => {
			component.isEditing = false;
			component.onEditClick();
			expect(component.isEditing).toBe(true);
		});
	});

	describe('#onEditorClosed', () => {
		it('should set isEditing to false', () => {
			component.isEditing = true;
			component.onEditorClosed();
			expect(component.isEditing).toBe(false);
		});
	});
});
