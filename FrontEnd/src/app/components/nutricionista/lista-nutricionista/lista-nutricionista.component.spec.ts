import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNutricionistaComponent } from './lista-nutricionista.component';

describe('ListaNutricionistaComponent', () => {
  let component: ListaNutricionistaComponent;
  let fixture: ComponentFixture<ListaNutricionistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaNutricionistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNutricionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
