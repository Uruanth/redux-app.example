import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMUComponent } from './comp-m-u.component';

describe('CompMUComponent', () => {
  let component: CompMUComponent;
  let fixture: ComponentFixture<CompMUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompMUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompMUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
