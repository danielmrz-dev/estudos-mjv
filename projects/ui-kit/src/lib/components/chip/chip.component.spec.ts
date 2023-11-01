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
  it('should emit event if remove icon is clicked', () => {
    let expectedValue: any;
    const fixture = TestBed.createComponent(ChipComponent);
    fixture.componentRef.setInput('removable', true);
    fixture.componentInstance.removed.subscribe(
      chip => expectedValue = chip
    );
    fixture.detectChanges();

    const removeIcon = fixture.debugElement.query(By.css('[data-testingId="remove"]'));
    removeIcon.triggerEventHandler('click');

    expect(expectedValue).toBe(fixture.componentInstance)
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