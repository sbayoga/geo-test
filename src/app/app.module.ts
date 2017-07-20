import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ComponentsModule } from '../components/components.module';
import { AppComponent } from './app.component';

import { HttpService } from './_services/http.srv';

 // Fail backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpModule
  ],
  providers: [
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
