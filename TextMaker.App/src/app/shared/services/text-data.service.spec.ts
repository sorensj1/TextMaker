import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TextDataService } from './text-data.service';
import { Project } from '../models';
import { Observable } from 'rxjs';

describe('Service: TextDataService', () => {
	let textDataService: TextDataService;
	let httpTestingController: HttpTestingController;

	const myNewTeam: Project = {
		name: 'My New Team',
		groups: [
			{
				name: 'Group 1',
				items: [
					{
						name: 'Item 1',
						text: 'The first item.',
						isSelected: false
					}
				],
				isExclusive: false,
				isOnNewLine: false,
				delimiter: ', '
			}
		],
		isAutomaticallyCopied: false,
		isDateSelected: false
	};

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [TextDataService],
			imports: [HttpClientTestingModule]
		});
		httpTestingController = TestBed.get(HttpTestingController);
		textDataService = TestBed.get(TextDataService);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	describe('#getKeys', () => {
		it('should get the keys', () => {
			const projects = ['Team 1', 'Team 2'];
			textDataService.getKeys(keys => {
				expect(keys).toEqual(['Team 1', 'Team 2']);
			});

			const request = httpTestingController.expectOne('api/projects');
			expect(request.request.method).toEqual('GET');
			request.flush(projects);
		});
	});

	describe('#get', () => {
		it('should get a project', () => {
			const testProject = {
				name: 'My Test Project'
			};
			textDataService.get('MyTestProject', project => {
				expect(project.name).toEqual('My Test Project');
			});

			const request = httpTestingController.expectOne('api/projects/MyTestProject');
			expect(request.request.method).toEqual('GET');
			request.flush(testProject);
		});
	});

	describe('#create', () => {
		it('should create a new team and handle an error', () => {
			const testProject = <Project>{
				name: 'My Test Project'
			};
			textDataService.create(testProject, result => {
				expect(result).toBe('My test error occurred!');
			});

			const request = httpTestingController.expectOne('api/projects/MyTestProject');
			expect(request.request.method).toEqual('POST');
			request.flush('My test error occurred!');
		});
	});

	describe('#update', () => {
		it('should update a team', () => {
			const testProject = <Project>{
				name: 'My Test Project'
			};
			textDataService.update('MyTestProject', testProject, result => {
				expect(result).toBe('My test error occurred!');
			});

			const request = httpTestingController.expectOne('api/projects/MyTestProject');
			expect(request.request.method).toEqual('PUT');
			request.flush('My test error occurred!');
		});
	});
});
