import { Project, TextItemGroup, TextItem } from '../shared/models';

export class TextCombinerService {

	getCombinedText(project: Project): string {
		let output = '';
		if (project && project.groups) {
			if (project.isDateSelected) {
				output = new Date().toISOString().slice(0, 10) + ' ';
			}
			project.groups.forEach((group: TextItemGroup) => {
				if (group.isOnNewLine) {
					output += '\n';
				}
				let hasDelimitedItems = false;
				group.items.forEach((item: TextItem) => {
					if (item.isSelected) {
						if (group.delimiter !== '') {
							if (hasDelimitedItems) {
								output += group.delimiter;
							} else {
								hasDelimitedItems = true;
							}
						}
						output += item.text;
					}
				});
			});
		}

		return output;
	}
}
