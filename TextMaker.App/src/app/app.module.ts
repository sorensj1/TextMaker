import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectsModule } from './projects';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';
import { appRoutes } from './app.routes';
import { TextCombinerModule } from './text-combiner/text-combiner.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		ProjectsModule,
		TextCombinerModule,
		ToastModule,
		HttpClientModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [MessageService],
	bootstrap: [AppComponent]
})
export class AppModule { }
