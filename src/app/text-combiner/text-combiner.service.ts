import { Project, TextItemGroup, TextItem } from '../shared/models';

export class TextCombinerService {

	getCombinedText(project: Project): string {
		let output = '';
		if (project && project.groups) {
			project.groups.forEach((group: TextItemGroup) => {
				group.items.forEach((item: TextItem) => {
					if (item.isSelected) {
						output += item.text;
					}
				});
			});
		}

		return output;
	}
}
