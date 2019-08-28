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
				delimiter: ', '
			}
		],
		isAutomaticallyCopied: false,
		isDateSelected: false,
		delimiter: '\n'
	};

	beforeEach(() => {
		service = new TextCombinerService();
	});
	describe('#transform', () => {
		it('should handle a null project', () => {
			expect(service.getCombinedText(null)).toBe('');
		});

		it('should transform a project', () => {
			expect(service.getCombinedText(myNewTeam)).toBe('The second item.The third item.');
		});
	});
});
