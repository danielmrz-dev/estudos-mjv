import { ProductUrlPipe } from "./product-url.pipe"

describe('ProductUrlPipe', () => {
  it('should properly build the url', () => {
    const pipe = new ProductUrlPipe()
    expect(pipe.transform(123)).toBe('https://test.com/product/123')
  })
  it('should throw the error if invalid id is provided', () => {
    const pipe = new ProductUrlPipe();
    expect(() => {
      pipe.transform(0);
    }).toThrowError(/Invalid product id/)
  })
})