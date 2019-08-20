import { TextItem } from './';

export interface TextItemGroup {
	name: string;
	items: TextItem[];
	isExclusive: boolean;
	delimiter: string;
}
