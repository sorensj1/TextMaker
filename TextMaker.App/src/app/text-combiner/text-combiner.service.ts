import { Project, TextItemGroup, TextItem } from '../shared/models';
import { FormatDateService } from '../shared/services';
import { Injectable } from '@angular/core';

@Injectable()
export class TextCombinerService {

	constructor(
		private formatDateService: FormatDateService
		) { }

	getCombinedText(project: Project): string {
		let output = '';
		if (project && project.groups) {
			if (project.isDateSelected) {
				output = this.formatDateService.format(new Date()) + ' ';
			}
			project.groups.forEach((group: TextItemGroup) => {
				if (group.isOnNewLine && group.items.find((item: TextItem) => item.isSelected)) {
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
