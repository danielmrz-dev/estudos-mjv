import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ButtonComponent } from "./button.component";
import { ButtonModule } from "./button.module";
import { DebugElement } from "@angular/core";

describe('ButtonComponent', () => {
  let fixture: ComponentFixture<ButtonComponent>;
  let el: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ButtonModule]})
    fixture = TestBed.createComponent(ButtonComponent);
    el = fixture.debugElement;
    fixture.detectChanges(); // initial CD. triggers ngOnInit
  });
  it('should test something...', () => {
    expect(true).toBe(true);
  })
})