import { toNumberProperty } from "ui-kit";
import { isNumber, toBooleanProperty } from "./type-coercion"

describe(`isNumber Function`, () => {
  it('should treat integer 100 as a number', () => {
    expect(isNumber(100)).toBe(true);
  });

  it('should treat string "100" as a number', () => {
    expect(isNumber("100")).toBe(true);
  });

  it('should treat an empty string as NaN', () => {
    expect(isNumber("")).toBe(false);
  });

  it('should treat string "100abc" as NaN', () => {
    expect(isNumber("100abc")).toBe(false);
  });

  it('should treat an object as NaN', () => {
    expect(isNumber({})).toBe(false);
  });
  
})

describe(`toBooleanProperty Function`, () => {
  it('should coerce "false" to false', () => {
    expect(toBooleanProperty("false")).toBe(false);
  });

  it('should coerce "" to true', () => {
    expect(toBooleanProperty("")).toBe(true);
  });

  it('should coerce null to false', () => {
    expect(toBooleanProperty(null)).toBe(false);
  });
  
})

fdescribe(`toNumberProperty Function`, () => {

  it('should transform 100 into 100', () => {
    expect(toNumberProperty(100)).toBe(100);
  });

  it('should transform "100" into 100', () => {
    expect(toNumberProperty("100")).toBe(100);
  });

  it('should transform null into 0', () => {
    expect(toNumberProperty(null)).toBe(0);
  });
  it('should transform "" into 0', () => {
    expect(toNumberProperty("")).toBe(0);
  });
  
})