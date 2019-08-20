import { TestBed, inject } from '@angular/core/testing';
import { TextDataService } from './text-data.service';
import { Project } from '../models';

describe('Service: TextDataService', () => {
	let textDataService: TextDataService;

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
				delimiter: ', '
			}
		],
		isAutomaticallyCopied: false,
		isDateSelected: false,
		delimiter: '\n'
	};

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [TextDataService]
		});
		textDataService = TestBed.get(TextDataService);
	});

	describe('#getKeys', () => {
		it('should get the keys', () => {
			let keys = textDataService.getKeys();
			expect(keys).toEqual(['Team1', 'Team2']);

			textDataService.create(myNewTeam);
			keys = textDataService.getKeys();
			expect(keys.length).toBe(3);
			expect(keys).toContain('MyNewTeam');

			textDataService.delete('MyNewTeam');
			keys = textDataService.getKeys();
			expect(keys.length).toBe(2);
			expect(keys).not.toContain('MyNewTeam');
		});
	});

	describe('#create', () => {
		it('should create a new team', () => {
			expect(textDataService.create(myNewTeam)).toBe(true);
			expect(textDataService.get('MyNewTeam')).toBe(myNewTeam);

			// can't create it a second time
			expect(textDataService.create(myNewTeam)).toBe(false);
		});
	});

	describe('#delete', () => {
		it('should delete a team', () => {
			expect(textDataService.get('Team1')).toBeTruthy();
			textDataService.delete('Team1');
			expect(textDataService.get('Team1')).toBeFalsy();
		});
	});

	describe('#update', () => {
		it('should update a team', () => {
			expect(textDataService.get('Team1').name).toBe('Team 1');
			textDataService.update('Team1', myNewTeam);
			expect(textDataService.get('Team1').name).toBe('My New Team');
		});
	});
});
