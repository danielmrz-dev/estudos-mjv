import { TestBed } from "@angular/core/testing";
import { ButtonComponent } from "./button.component";
import { ButtonModule } from "./button.module";

describe('ButtonComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ButtonModule]})
    TestBed.createComponent(ButtonComponent);
  });
  it('should test something...', () => {
    expect(true).toBe(true);
  })
})