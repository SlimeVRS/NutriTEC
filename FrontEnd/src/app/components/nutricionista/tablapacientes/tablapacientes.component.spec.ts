import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablapacientesComponent } from './tablapacientes.component';

describe('TablapacientesComponent', () => {
  let component: TablapacientesComponent;
  let fixture: ComponentFixture<TablapacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablapacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablapacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
