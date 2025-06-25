import { Component } from "@angular/core"
import { TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser"
import { ChipComponent } from "../chip/chip.component"

describe(ChipComponent.name, () => {

  it('should properly project content', () => {
    const { debugEl } = testingSetup();
    const chipTextElement = debugEl.query(By.css('[data-testingId="chip-text"]')).nativeElement;
    expect(chipTextElement.innerText).toBe('Angular');
  });

  it('should emit event if remove icon is clicked', () => {
    let expectedValue: any;
    const fixture = TestBed.createComponent(ChipComponent);
    fixture.componentRef.setInput('removable', true);
    fixture.componentInstance.removed.subscribe((chip) => {
      expectedValue = chip;
    });
    fixture.detectChanges();
    const removeIcon = fixture.debugElement.query(By.css('[data-testingId="remove"]'));
    removeIcon.triggerEventHandler('click');
    expect(expectedValue).toBe(fixture.componentInstance);
  });

  it('should emit event if remove icon is clicked (Test Host)', () => {
    const { fixture, debugEl } = testingSetup();
    fixture.componentInstance.removable = true;
    fixture.detectChanges();
    const icon = debugEl.query(By.css('[data-testingId="remove"]'))
    icon.triggerEventHandler('click');
    expect(fixture.componentInstance.removedItem).toBe(debugEl.componentInstance);
  });

});

function testingSetup() {
  @Component({
    standalone: true,
    imports: [ ChipComponent ],
    template: `<df-chip [removable]="removable" (removed)="removedItem = $event">Angular</df-chip>`,
  })
  class ChipTestHost {
    removedItem!: ChipComponent<unknown>;
    removable = false;
  }

  let fixture = TestBed.createComponent(ChipTestHost);
  let debugEl = fixture.debugElement.query(By.directive(ChipComponent));
  let element: HTMLElement = debugEl.nativeElement;
  let hostComponent = fixture.componentInstance;
  fixture.detectChanges();

  return { fixture, debugEl };
}
