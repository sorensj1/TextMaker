import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectsModule } from './projects';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';
import { appRoutes } from './app.routes';
import { TextCombinerModule } from './text-combiner/text-combiner.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		ProjectsModule,
		TextCombinerModule,
		ToastModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [MessageService],
	bootstrap: [AppComponent]
})
export class AppModule { }
