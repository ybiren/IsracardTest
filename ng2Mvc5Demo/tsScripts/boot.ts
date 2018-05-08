import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app';
import { GitHubComponent } from "./github";
import { SpinnerModule } from 'ng-spinner';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	imports: [BrowserModule, FormsModule, HttpModule, SpinnerModule, NgbModule.forRoot() ],
    declarations: [AppComponent, GitHubComponent],
    bootstrap: [AppComponent],
    entryComponents: [GitHubComponent]
})
export class AppModule { }