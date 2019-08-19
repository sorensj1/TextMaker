import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeamsModule } from './teams';
import { appRoutes } from './app.routes';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		TeamsModule,
		RouterModule.forRoot(
			appRoutes
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
