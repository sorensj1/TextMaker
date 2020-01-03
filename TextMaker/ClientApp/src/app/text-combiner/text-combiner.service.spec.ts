import { TextCombinerService } from './text-combiner.service';
import { Project } from '../shared/models';

describe('Service: TextCombinerService', () => {
	let service: TextCombinerService;

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
		service = new TextCombinerService();
	});
	describe('#transform', () => {
		it('should handle a null project', () => {
			expect(service.getCombinedText(null)).toBe('');
		});

		it('should combine text for a project with no date', () => {
			myNewTeam.isDateSelected = false;
			myNewTeam.groups[0].items[0].isSelected = false;
			expect(service.getCombinedText(myNewTeam)).toBe('The second item.\nThe third item.');
		});

		it('should combine text for a project with a date', () => {
			spyOn(Date.prototype, 'toISOString').and.returnValue('1970-1-1');
			myNewTeam.isDateSelected = true;
			myNewTeam.groups[0].items[0].isSelected = false;
			expect(service.getCombinedText(myNewTeam)).toBe('1970-1-1 The second item.\nThe third item.');
		});

		it('should add delimiters between items', () => {
			myNewTeam.isDateSelected = false;
			myNewTeam.groups[0].items[0].isSelected = true;
			myNewTeam.groups[0].delimiter = '';
			expect(service.getCombinedText(myNewTeam)).toBe('The first item.The second item.\nThe third item.');

			myNewTeam.groups[0].delimiter = ', ';
			expect(service.getCombinedText(myNewTeam)).toBe('The first item., The second item.\nThe third item.');
		});
	});
});
