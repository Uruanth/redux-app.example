import { CompMUComponent } from './comp-m-u/comp-m-u.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
    path: '',
    children: [
        { path: "com-uno", component: CompMUComponent },
        { path: '**', redirectTo: 'com-uno' },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModuloUnoRoutingModule { }
