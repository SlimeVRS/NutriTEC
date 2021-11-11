import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteAvanceComponent } from './reporte-avance.component';

describe('ReporteAvanceComponent', () => {
  let component: ReporteAvanceComponent;
  let fixture: ComponentFixture<ReporteAvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteAvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
