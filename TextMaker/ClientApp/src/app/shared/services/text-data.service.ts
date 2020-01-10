import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../models';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TextDataService {

	constructor(
		private httpClient: HttpClient
	) { }

	getKeys(handler: (keys: string[]) => void) {
		const observable = this.httpClient.get('projects');
		observable.subscribe(result => handler(result as string[]));
	}

	get(key: string, handler: (project: Project) => void) {
		const observable = this.httpClient.get(`projects\\${key}`);
		observable.subscribe(result => handler(result as Project));
	}

	create(project: Project, handler: (result: string) => void) {
		const key = this.getKey(project.name);
		const observable = this.httpClient.post(`projects\\${key}`, project);
		observable.subscribe(result => handler(result as string));
	}

	update(key: string, project: Project, handler: (result: string) => void): void {
		const observable = this.httpClient.post(`projects\\${key}`, project);
		observable.subscribe(result => handler(result as string));
	}

	private getKey(projectName: string): string {
		// remove whitespace
		return projectName.replace(/\s/g, '');
	}
}
