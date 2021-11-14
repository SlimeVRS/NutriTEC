import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegNutriComponent } from './reg-nutri.component';

describe('RegNutriComponent', () => {
  let component: RegNutriComponent;
  let fixture: ComponentFixture<RegNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegNutriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
