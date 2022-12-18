import { TestBed } from '@angular/core/testing';

import { ServicioTestService } from './servicio-test.service';

describe('ServicioTestService', () => {
  let service: ServicioTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
