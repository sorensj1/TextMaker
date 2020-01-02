import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { TextCombinerComponent } from './text-combiner.component';
import { TextDataService } from '../shared/services';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TextGroupModule } from './text-group';
import { TextOutputModule } from './text-output';
import { TextEditOptionsModule } from './text-edit-options';
import { TextCombinerService } from './text-combiner.service';
import { Project } from '../shared/models';

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
			imports: [CommonModule, ButtonModule, TextGroupModule, TextOutputModule, TextEditOptionsModule],
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

	describe('#onDateClick', () => {
		it('should change the date setting', () => {
			textCombinerService.getCombinedText.calls.reset();
			component.project = <Project>{
				isDateSelected: false
			};
			component.onDateClick();
			expect(component.project.isDateSelected).toBe(true);
			expect(textCombinerService.getCombinedText).toHaveBeenCalledWith(component.project);
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
		it('should just set isEditing to false when cancelled', () => {
			textCombinerService.getCombinedText.calls.reset();
			component.isEditing = true;
			component.onEditorClosed(false);
			expect(component.isEditing).toBe(false);
			expect(textCombinerService.getCombinedText).not.toHaveBeenCalled();
		});

		it('should set isEditing to false and refresh the text on OK', () => {
			textCombinerService.getCombinedText.calls.reset();
			component.isEditing = true;
			component.onEditorClosed(true);
			expect(component.isEditing).toBe(false);
			expect(textCombinerService.getCombinedText).toHaveBeenCalledWith(component.project);
		});
	});
});
