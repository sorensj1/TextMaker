import { TextItemGroup } from '.';

export interface Project {
	name: string;
	groups: TextItemGroup[];
	isDateSelected: boolean;
	isAutomaticallyCopied: boolean;
}
