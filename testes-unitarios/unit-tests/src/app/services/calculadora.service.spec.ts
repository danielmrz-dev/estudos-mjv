import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CalculadoraService
      ]
    });
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add numbers when TipoOperacao is "soma"', () => {
    const resultado = service.calcula(1, 2, 'soma');
    expect(resultado).toEqual(3);
  });
  
});
