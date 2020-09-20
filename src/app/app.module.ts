import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeSideComponent } from './components/trace/code-side/code-side.component';
import { CodeLineComponent } from './components/trace/code-side/code-line/code-line.component';
import { TraceComponent } from './components/trace/trace.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeSideComponent,
    CodeLineComponent,
    TraceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
