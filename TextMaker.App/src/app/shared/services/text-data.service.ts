import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TextDataService {

private baseUri = 'api/projects';

	constructor(
		private httpClient: HttpClient
	) { }

	getKeys(handler: (keys: string[]) => void) {
		const observable = this.httpClient.get(this.baseUri);
		observable.subscribe(result => handler(result as string[]));
	}

	get(key: string, handler: (project: Project) => void) {
		const observable = this.httpClient.get(`${this.baseUri}/${key}`);
		observable.subscribe(result => handler(result as Project));
	}

	create(project: Project, handler: (result: string) => void) {
		const key = this.getKey(project.name);
		const observable = this.httpClient.post(`${this.baseUri}/${key}`, project);
		observable.subscribe(result => handler(result as string));
	}

	update(key: string, project: Project, handler: (result: string) => void): void {
		const observable = this.httpClient.put(`${this.baseUri}/${key}`, project);
		observable.subscribe(result => handler(result as string));
	}

	private getKey(projectName: string): string {
		// remove whitespace
		return projectName.replace(/\s/g, '');
	}
}
