import { Injectable } from '@angular/core';
import { Project } from '../models';

@Injectable({
	providedIn: 'root'
})
export class TextDataService {

	private data = {
		'Team1': <Project>{
			name: 'Team 1',
			groups: [
				{
					name: 'Team Members',
					items: [
						{
							name: 'Guy, Some',
							text: 'Some Guy',
							isSelected: true
						},
						{
							name: 'Guy, Another',
							text: 'Another Guy',
							isSelected: false
						},
						{
							name: 'Else, Someone',
							text: 'Someone Else',
							isSelected: true
						}
					],
					isExclusive: false,
					delimiter: ', '
				},
				{
					name: 'Reasoning',
					items: [
						{
							name: 'Not Bad',
							text: 'It\'s not so bad.',
							isSelected: false
						},
						{
							name: 'Could Be Worse',
							text: 'You know, it could be worse.',
							isSelected: false
						},
						{
							name: 'Better Next Time',
							text: 'We\'ll do better next time.',
							isSelected: false
						}
					],
					isExclusive: true,
					delimiter: ''
				},
				{
					name: 'Latin Stuff',
					items: [
						{
							name: 'Lorem',
							text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
							isSelected: true
						},
						{
							name: 'Quisque',
							text: 'Quisque et volutpat sem.  Quisque quis magna non ex tempor tempus eu id nisl. Nam eget laoreet sapien.  Quisque commodo enim a odio faucibus facilisis. In quis urna id nulla euismod lacinia ut at sem. Morbi ac feugiat tellus, euismod rutrum quam.',
							isSelected: false
						},
						{
							name: 'Etiam',
							text: 'Etiam diam nisl, semper vel fringilla vitae, pretium in elit. Ut enim dui, laoreet in dictum a, elementum nec ligula.',
							isSelected: false
						},
						{
							name: 'Sed',
							text: 'Sed eu porttitor turpis, faucibus auctor purus.',
							isSelected: false
						},
						{
							name: 'Curabitur',
							text: 'Curabitur ornare scelerisque orci vel bibendum.',
							isSelected: false
						}
					],
					isExclusive: false,
					delimiter: '  '
				}
			],
			isAutomaticallyCopied: false,
			isDateSelected: false,
			delimiter: '\n'
		},
		'Team2': <Project>{
			name: 'Team 2',
			groups: [
				{
					name: 'Participants',
					items: [
						{
							name: 'Schmoe, Joe',
							text: 'Joe Schmoe',
							isSelected: false
						},
						{
							name: 'Doe, Jane',
							text: 'Jane Doe',
							isSelected: false
						}
					],
					isExclusive: false,
					delimiter: ', '
				}
			],
			isAutomaticallyCopied: true,
			isDateSelected: true,
			delimiter: '\n'
		}
	};

	constructor() { }

	getKeys(): string[] {
		return Object.keys(this.data);
	}

	get(key: string) {
		return this.data[key];
	}

	create(project: Project): boolean {
		const key = this.getKey(project.name);
		if (Object.keys(this.data).find(k => k === key)) {
			// key already exists
			return false;
		}

		this.data[key] = project;
		return true;
	}

	delete(key: string): void {
		delete this.data[key];
	}

	update(key: string, project: Project): void {
		this.data[key] = project;
	}

	private getKey(projectName: string): string {
		// remove whitespace
		return projectName.replace(/\s/g, '');
	}
}
