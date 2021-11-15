import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducregistComponent } from './producregist.component';

describe('ProducregistComponent', () => {
  let component: ProducregistComponent;
  let fixture: ComponentFixture<ProducregistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducregistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducregistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
