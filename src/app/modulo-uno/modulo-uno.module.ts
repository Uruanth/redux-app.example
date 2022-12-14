import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompMUComponent } from './comp-m-u/comp-m-u.component';
import { ModuloUnoRoutingModule } from './modulo-uno.routes';
import { counterReducer } from './redux/reducer/reducers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EfectosMU } from './redux/effects/efectos.main.effects';



@NgModule({
  declarations: [
    CompMUComponent
  ],
  imports: [
    CommonModule,
    ModuloUnoRoutingModule,
    StoreModule.forFeature("prueba", counterReducer),
    EffectsModule.forFeature([EfectosMU]),
  ]
})
export class ModuloUnoModule { }
