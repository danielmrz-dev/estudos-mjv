import { Component } from "@angular/core";
import { CanDisableDirective } from "./can-disable.directive";
import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

describe('CanDisableDirective', () => {
  it('should apply necessary classes and attributes', () => {
    const { debugEl } = setup();
    expect(debugEl.nativeElement.classList).toContain('disabled');
    expect(debugEl.nativeElement.getAttribute('disabled')).not.toBeNull();
  })

  it('should prevent default behaviour', () => {
    const { debugEl, fixture } = setup();
    const clickEvent = new PointerEvent('click', { cancelable: true });
    debugEl.triggerEventHandler('click', clickEvent);
    expect(clickEvent.defaultPrevented).toBe(true);

    const dblClickEvent = new PointerEvent('click', { cancelable: true });
    debugEl.triggerEventHandler('click', dblClickEvent);
    expect(dblClickEvent.defaultPrevented).toBe(true);
    
  });
  
})

function setup() {
  @Component({
    imports: [CanDisableDirective],
    template: `
      <a dfCanDisable [disabled]="disabled">
        Disabled link
      </a>`,
    standalone: true
  })
  class CanDisableTestHost {
    disabled = false;
  }

  const fixture = TestBed.createComponent(CanDisableTestHost);
  const debugEl = fixture.debugElement.query(By.css('a'));

  fixture.componentInstance.disabled = true;
  fixture.detectChanges();

  return { fixture, debugEl };

}