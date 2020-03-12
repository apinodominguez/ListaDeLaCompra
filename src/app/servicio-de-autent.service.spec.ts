import { TestBed } from '@angular/core/testing';

import { ServicioDeAutentService } from './servicio-de-autent.service';

describe('ServicioDeAutentService', () => {
  let service: ServicioDeAutentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDeAutentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
