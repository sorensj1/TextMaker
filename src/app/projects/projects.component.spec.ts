import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { EditProjectModule } from './edit-project';

describe('ProjectsComponent', () => {
	let component: ProjectsComponent;
	let fixture: ComponentFixture<ProjectsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [EditProjectModule],
			declarations: [ProjectsComponent]
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
});
