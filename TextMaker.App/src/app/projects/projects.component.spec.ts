import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { EditProjectModule } from './edit-project';
import { TextDataService } from '../shared/services';
import { MessageService } from 'primeng/components/common/messageservice';
import { Project } from '../shared/models';

describe('ProjectsComponent', () => {
	let component: ProjectsComponent;
	let fixture: ComponentFixture<ProjectsComponent>;

	const messageService = {
		add: jasmine.createSpy('add')
	};

	const textDataService = {
		getKeys: jasmine.createSpy('getKeys').and.callFake(handler => handler([
			'Project 1',
			'Project 2'
		])),
		create: jasmine.createSpy('create')
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [EditProjectModule],
			declarations: [ProjectsComponent],
			providers: [
				{ provide: MessageService, useValue: messageService },
				{ provide: TextDataService, useValue: textDataService }
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProjectsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('#ngOnInit', () => {
		it('should set the projects', () => {
			textDataService.getKeys.calls.reset();
			component.projectNames = [];
			component.ngOnInit();
			expect(component.projectNames).toEqual(['Project 1', 'Project 2']);
		});
	});

	describe('#onAddClick', () => {
		it('should set the dialog to appear', () => {
			expect(component.isDialogShown).toBe(false);
			component.onAddClick();
			expect(component.isDialogShown).toBe(true);
		});
	});

	describe('#onProjectAdded', () => {
		it('should add a new project', () => {
			let project: Project;
			messageService.add.calls.reset();
			textDataService.create.and.callFake((proj, handler) => {
				project = proj;
				handler('');
			});
			textDataService.getKeys.calls.reset();

			component.onProjectSaved('myNewProject');

			expect(project).toEqual(<Project>{
				name: 'myNewProject',
				groups: [],
				isDateSelected: false,
				isAutomaticallyCopied: true,
				delimiter: ''
			});
			expect(textDataService.getKeys).toHaveBeenCalled();
			expect(messageService.add).not.toHaveBeenCalled();
		});

		it('should add a new project and handle an error', () => {
			let project: Project;
			messageService.add.calls.reset();
			textDataService.create.and.callFake((proj, handler) => {
				project = proj;
				handler('My test error occurred!');
			});
			textDataService.getKeys.calls.reset();

			component.onProjectSaved('myNewProject');

			expect(project).toEqual(<Project>{
				name: 'myNewProject',
				groups: [],
				isDateSelected: false,
				isAutomaticallyCopied: true,
				delimiter: ''
			});
			expect(textDataService.getKeys).toHaveBeenCalled();
			expect(messageService.add).toHaveBeenCalledWith({ severity: 'error', summary: 'Error', detail: 'My test error occurred!' });
		});
	});
});
