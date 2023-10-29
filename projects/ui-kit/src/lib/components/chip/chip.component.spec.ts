import { Component } from "@angular/core"
import { TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser"
import { ChipComponent } from "../chip/chip.component"

describe('ChipComponent', () => {
  it('should properly project content', () => {
    const {chipDebugEl} = setup();
    const chipTextEl = chipDebugEl.query(By.css('[data-testingId="chip-text"]')).nativeElement;
    expect(chipTextEl.innerText).toBe('Angular');
  })
})
function setup() {
  @Component({
    standalone: true,
    imports: [ChipComponent],
    template: `<df-chip>Angular</df-chip>`
  })
  class ChipTestHost {}

  let fixture = TestBed.createComponent(ChipTestHost);
  let chipDebugEl = fixture.debugElement.query(By.directive(ChipComponent));
  fixture.detectChanges();
  return { fixture, chipDebugEl }
  
}