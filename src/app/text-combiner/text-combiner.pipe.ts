import { Pipe, PipeTransform } from '@angular/core';
import { Project, TextItemGroup, TextItem } from '../shared/models';

@Pipe({
	name: 'textCombiner'
})
export class TextCombinerPipe implements PipeTransform {

	transform(project: Project): string {
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
