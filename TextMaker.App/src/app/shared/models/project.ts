import { TextItemGroup } from '../models';

export interface Project {
	name: string;
	groups: TextItemGroup[];
	isDateSelected: boolean;
	isAutomaticallyCopied: boolean;
}
