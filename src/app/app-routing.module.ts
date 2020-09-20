import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TraceComponent} from './components/trace/trace.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'trace'},
  {path: 'trace', component: TraceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
