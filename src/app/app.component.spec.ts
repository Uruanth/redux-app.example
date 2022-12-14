import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';

const estadoInicial: { contadores: number, prueba: number } = {
  contadores: 0,
  prueba: 0
}
describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: MockStore<{ contadores: number, prueba: number }>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        AppComponent
      ],
      providers: [
        provideMockStore({ initialState: estadoInicial }),

      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore)
    fixture.detectChanges();
  });


  it('should create', () => {
    store.subscribe(console.log)
    store.setState({
      contadores: 11,
      prueba: 8
    })
    store.subscribe(console.log)
    expect(component).toBeTruthy();
  });

});
