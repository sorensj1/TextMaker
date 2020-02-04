import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { TextCombinerComponent } from './text-combiner.component';
import { TextDataService } from '../shared/services';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TextGroupModule } from './text-group';
import { EditTextGroupModule } from './edit-text-group';
import { TextOutputModule } from './text-output';
import { TextEditOptionsModule } from './text-edit-options';
import { TextCombinerService } from './text-combiner.service';
import { Project, TextItemGroup } from '../shared/models';

describe('TextCombinerComponent', () => {
	let component: TextCombinerComponent;
	let fixture: ComponentFixture<TextCombinerComponent>;

	const activatedRoute = {
		snapshot: {
			paramMap: {
				get: jasmine.createSpy('get').and.returnValue('MyProjectName')
			}
		}
	};

	const textDataService = {
		get: jasmine.createSpy('get').and.callFake((name, handler) => {
			const project = <Project>{
				name: name
			};
			handler(project);
		}),
		update: jasmine.createSpy('update').and.callFake((name, project, handler) => {
			handler();
		})
	};

	const textCombinerService = {
		getCombinedText: jasmine.createSpy('getCombinedText').and.returnValue('combined text')
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [CommonModule, ButtonModule, TextGroupModule, EditTextGroupModule, TextOutputModule, TextEditOptionsModule],
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
			expect(textDataService.get).toHaveBeenCalled();
			expect(textCombinerService.getCombinedText).toHaveBeenCalled();
			expect(component.project.name).toBe('MyProjectName');
		});
	});

	describe('#onGroupChange', () => {
		it('should handle a group change', () => {
			textCombinerService.getCombinedText.calls.reset();
			component.combinedText = '';
			component.onGroupChange();
			expect(textCombinerService.getCombinedText).toHaveBeenCalledWith(component.project);
			expect(component.combinedText).toBe('combined text');
		});
	});

	describe('#onGroupMoveUp', () => {
		it('should move a group up in the list', () => {
			component.project = <Project>{
				groups: [
					<TextItemGroup>{
						name: 'Group 1'
					},
					<TextItemGroup>{
						name: 'Group 2'
					},
					<TextItemGroup>{
						name: 'Group 3'
					}
				]
			};
			component.onGroupMoveUp(component.project.groups[1]);
			expect(component.project.groups[0].name).toBe('Group 2');
			expect(component.project.groups[1].name).toBe('Group 1');
			expect(component.project.groups[2].name).toBe('Group 3');
		});
	});

	describe('#onGroupMoveDown', () => {
		it('should move a group down in the list', () => {
			component.project = <Project>{
				groups: [
					<TextItemGroup>{
						name: 'Group 1'
					},
					<TextItemGroup>{
						name: 'Group 2'
					},
					<TextItemGroup>{
						name: 'Group 3'
					}
				]
			};
			component.onGroupMoveDown(component.project.groups[1]);
			expect(component.project.groups[0].name).toBe('Group 1');
			expect(component.project.groups[1].name).toBe('Group 3');
			expect(component.project.groups[2].name).toBe('Group 2');
		});
	});

	describe('#onGroupAdd', () => {
		it('should add a group to an existing list', () => {
			component.project = <Project>{
				groups: [
					<TextItemGroup>{
						name: 'Group 1'
					},
					<TextItemGroup>{
						name: 'Group 2'
					},
					<TextItemGroup>{
						name: 'Group 3'
					}
				]
			};
			component.onGroupAdd(component.project.groups[1]);
			expect(component.project.groups[0].name).toBe('Group 1');
			expect(component.project.groups[1].name).toBe('Group 2');
			expect(component.project.groups[2].name).toBe('New Group');
			expect(component.project.groups[3].name).toBe('Group 3');
		});

		it('should add a group to an empty list', () => {
			component.project = <Project>{
				groups: []
			};
			component.onGroupAdd(null);
			expect(component.project.groups[0].name).toBe('New Group');
		});
	});

	describe('#onGroupDelete', () => {
		it('should set isEditing to true', () => {
			component.project = <Project>{
				groups: [
					<TextItemGroup>{
						name: 'Group 1'
					},
					<TextItemGroup>{
						name: 'Group 2'
					},
					<TextItemGroup>{
						name: 'Group 3'
					}
				]
			};
			component.onGroupDelete(component.project.groups[1]);
			expect(component.project.groups[0].name).toBe('Group 1');
			expect(component.project.groups[1].name).toBe('Group 3');
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
			textDataService.update.calls.reset();
			component.isEditing = true;
			component.onEditorClosed(false);
			expect(component.isEditing).toBe(false);
			expect(textCombinerService.getCombinedText).not.toHaveBeenCalled();
			expect(textDataService.update).not.toHaveBeenCalled();
		});

		it('should set isEditing to false and refresh the text on OK', () => {
			textCombinerService.getCombinedText.calls.reset();
			textDataService.update.calls.reset();
			component.isEditing = true;
			component.onEditorClosed(true);
			expect(component.isEditing).toBe(false);
			expect(textCombinerService.getCombinedText).toHaveBeenCalledWith(component.project);
			expect(textDataService.update).toHaveBeenCalled();
		});
	});
});
