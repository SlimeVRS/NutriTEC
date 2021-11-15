import { TestBed } from '@angular/core/testing';

import { CuentaActivaService } from './cuenta-activa.service';

describe('CuentaActivaService', () => {
  let service: CuentaActivaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentaActivaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
