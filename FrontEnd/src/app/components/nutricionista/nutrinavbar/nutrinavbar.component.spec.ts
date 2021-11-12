import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrinavbarComponent } from './nutrinavbar.component';

describe('NutrinavbarComponent', () => {
  let component: NutrinavbarComponent;
  let fixture: ComponentFixture<NutrinavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutrinavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrinavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
