import { TestBed } from "@angular/core/testing"
import { PRODUCT_URL, ProductUrlPipe } from "./product-url.pipe"

describe('ProductUrlPipe', () => {

  it('should properly build the url', () => {
    const { pipe } = setup();
    const url = pipe.transform(123);
    expect(url).toBe('https://test.com/product/123')
  })
  it('should throw the error if invalid id is provided', () => {
    const { pipe } = setup();
    expect(() => pipe.transform(0)).toThrowError(/Invalid product id/);
  })
  it('should throw an error if the baseURL is not provided', () => {
    const { pipe } = setup('');
    expect(() => pipe.transform(133)).toThrowError(/not provided/);    
  })
})

function setup(url = 'https://test.com') {
    TestBed.configureTestingModule({
      providers: [
        ProductUrlPipe,
        {
          provide: PRODUCT_URL,
          useValue: url
        }
      ]
    }).compileComponents();
    const pipe = TestBed.inject(ProductUrlPipe);
    const testProductUrl = TestBed.inject(PRODUCT_URL);

    return { pipe, testProductUrl };
}