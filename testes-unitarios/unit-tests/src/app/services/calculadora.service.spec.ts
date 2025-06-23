import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';
import { LoggerService } from './logger.service';

describe(CalculadoraService.name, () => {
  let service: CalculadoraService;
  let prot = CalculadoraService.prototype;
  let loggerSpy: jasmine.SpyObj<LoggerService>;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('Logger', ['log'])
    TestBed.configureTestingModule({
      providers: [
        CalculadoraService,
        {
          provide: LoggerService, useValue: loggerSpy
        }
      ]
    });
    service = TestBed.inject(CalculadoraService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe(`Method ${prot.calcula.name}()`, () => {
    it('should add numbers correctly when TipoOperacao is "soma"', () => {
      const resultado = service.calcula(1, 2, 'soma');
      expect(resultado).toEqual(3);
    });
    it('should multiply numbers correctly when TipoOperacao is "multiplicacao"', () => {
      const resultado = service.calcula(10, 2, 'multiplicacao');
      expect(resultado).withContext("O resultado deve ser 20.").toEqual(20);
    });
    it('should subtract numbers correctly when TipoOperacao is "subtracao"', () => {
      const resultado = service.calcula(10, 2, 'subtracao');
      expect(resultado).toEqual(8);
    });
    it('should divide numbers correctly when TipoOperacao is "divisao"', () => {
      const resultado = service.calcula(10, 2, 'divisao');
      expect(resultado).toEqual(5);
    });
  });

  it('should call method log', () => {
    service.calcula(1, 2, "opa");
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });




});
