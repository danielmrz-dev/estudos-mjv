import { COUNTRIES, TaxCalculatorService } from "./tax-calculator.service"
import { TestBed } from '@angular/core/testing';

describe(TaxCalculatorService.name, () => {
  let service: TaxCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { 
          provide: COUNTRIES,
          useValue: { ua: { name: 'Ukraine', vat: 20 } }
        }
      ]
    })
    service = TestBed.inject(TaxCalculatorService);
  })

  describe('TaxCalculatorService: Error handling', () => {
    it('should throw error if country does not exist', () => {
      expect(() => service.calculateVAT(2, 'uu')).toThrowError(/isn't supported/);
    });

    it('should throw error if price is less than 0', () => {
      expect(() => service.calculateVAT(-2, 'ua')).toThrowError(/negative number/);
    });
  });

  it('should return 0 is isB2B flag is false', () => {
    const result = service.calculateVAT(2, 'ua', true);
    expect(result).toBe(0);
  });

  it('should properly calculate VAT based on country', () => {
    const result = service.calculateVAT(20, 'ua');
    expect(result).toBe(4);
  });

})