import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TraceComponent} from './components/trace/trace.component';
import {DebuggerComponent} from './components/trace/widget-side/debugger/debugger.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'trace'},
  {path: 'trace', component: TraceComponent},
  {path: 'debug', component: DebuggerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

