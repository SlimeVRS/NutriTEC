import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRegComponent } from './nav-reg.component';

describe('NavRegComponent', () => {
  let component: NavRegComponent;
  let fixture: ComponentFixture<NavRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
