import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeSideComponent } from './components/trace/code-side/code-side.component';
import { CodeLineComponent } from './components/trace/code-side/code-line/code-line.component';
import { TraceComponent } from './components/trace/trace.component';
import { WidgetSideComponent } from './components/trace/widget-side/widget-side.component';
import { FileWidgetComponent } from './components/trace/widget-side/file-widget/file-widget.component';
import {FormsModule} from '@angular/forms';
import { LineManipulatorDirective } from './Directives/line-manipulator.directive';

@NgModule({
  declarations: [
    AppComponent,
    CodeSideComponent,
    CodeLineComponent,
    TraceComponent,
    WidgetSideComponent,
    FileWidgetComponent,
    LineManipulatorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
