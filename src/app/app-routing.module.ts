import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TraceComponent} from './components/trace/trace.component';
import {WidgetSideComponent} from './components/trace/widget-side/widget-side.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'trace'},
  {path: 'trace', component: TraceComponent},
  {path: 'shit', component: WidgetSideComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
