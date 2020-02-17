import { TextCombinerService } from './text-combiner.service';
import { Project } from '../shared/models';
import { TestBed } from '@angular/core/testing';
import { FormatDateService } from '../shared/services';

describe('Service: TextCombinerService', () => {
	let textCombinerService: TextCombinerService;
	const formatDateService = {
		format: (date: Date) => '1-Jan-1970'
	};

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
					},
					{
						name: 'Item 2',
						text: 'The second item.',
						isSelected: true
					}
				],
				isExclusive: false,
				isOnNewLine: false,
				delimiter: ', '
			},
			{
				name: 'Group 3',
				items: [
					{
						name: 'Item 3',
						text: 'The third item.',
						isSelected: true
					},
					{
						name: 'Item 4',
						text: 'The fourth item.',
						isSelected: false
					}
				],
				isExclusive: false,
				isOnNewLine: true,
				delimiter: ', '
			}
		],
		isAutomaticallyCopied: false,
		isDateSelected: false
	};

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [TextCombinerService, { provide: FormatDateService, useValue: formatDateService }]
		});
		textCombinerService = TestBed.get(TextCombinerService);
	});
	describe('#transform', () => {
		it('should handle a null project', () => {
			expect(textCombinerService.getCombinedText(null)).toBe('');
		});

		it('should combine text for a project with no date', () => {
			myNewTeam.isDateSelected = false;
			myNewTeam.groups[0].items[0].isSelected = false;
			expect(textCombinerService.getCombinedText(myNewTeam)).toBe('The second item.\nThe third item.');
		});

		it('should combine text for a project with a date', () => {
			myNewTeam.isDateSelected = true;
			myNewTeam.groups[0].items[0].isSelected = false;
			expect(textCombinerService.getCombinedText(myNewTeam)).toBe('1-Jan-1970 The second item.\nThe third item.');
		});

		it('should add delimiters between items', () => {
			myNewTeam.isDateSelected = false;
			myNewTeam.groups[0].items[0].isSelected = true;
			myNewTeam.groups[0].delimiter = '';
			expect(textCombinerService.getCombinedText(myNewTeam)).toBe('The first item.The second item.\nThe third item.');

			myNewTeam.groups[0].delimiter = ', ';
			expect(textCombinerService.getCombinedText(myNewTeam)).toBe('The first item., The second item.\nThe third item.');
		});
	});
});
