import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { EditProjectModule } from './edit-project';
import { MessageService } from 'primeng/components/common/messageservice';
import { TextDataService } from '../shared/services';

describe('ProjectsComponent', () => {
	let component: ProjectsComponent;
	let fixture: ComponentFixture<ProjectsComponent>;

	const messageService = {
		add: jasmine.createSpy('add')
	};

	const textDataService = {
		getKeys: jasmine.createSpy('getKeys').and.returnValue([]),
		create: jasmine.createSpy('create')
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [EditProjectModule],
			declarations: [ProjectsComponent],
			providers: [
				{ provide: TextDataService, useValue: textDataService },
				{ provide: MessageService, useValue: messageService }
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProjectsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
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
			messageService.add.calls.reset();
			textDataService.create.calls.reset();
			textDataService.create.and.returnValue(true);
			textDataService.getKeys.calls.reset();
			component.onProjectSaved('myNewProject');
			expect(textDataService.create).toHaveBeenCalledWith({
				name: 'myNewProject',
				groups: [],
				isDateSelected: false,
				isAutomaticallyCopied: true,
				delimiter: ''
			});
			expect(textDataService.getKeys).toHaveBeenCalled();
			expect(messageService.add).not.toHaveBeenCalled();
		});

		it('should generate a message if there is an error', () => {
			messageService.add.calls.reset();
			textDataService.create.calls.reset();
			textDataService.create.and.returnValue(false);
			textDataService.getKeys.calls.reset();
			component.onProjectSaved('myNewProject');
			expect(textDataService.getKeys).not.toHaveBeenCalled();
			expect(messageService.add).toHaveBeenCalledWith({ severity: 'error', summary: 'Error', detail: 'Could not create the new project: myNewProject.' });
		});
	});
});
