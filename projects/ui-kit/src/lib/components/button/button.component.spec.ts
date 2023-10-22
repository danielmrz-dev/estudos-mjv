import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ButtonComponent, BUTTON_CLASSES } from "./button.component";
import { ButtonModule } from "./button.module";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('ButtonComponent', () => {
  let fixture: ComponentFixture<ButtonComponent>;
  let debugEl: DebugElement;
  let el: HTMLElement;
  let component: ButtonComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ButtonModule]})
    fixture = TestBed.createComponent(ButtonComponent);
    debugEl = fixture.debugElement;
    el = debugEl.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges(); // initial CD. triggers ngOnInit
  });
  describe('Appearance state', () => {
    it('should have "solid" appearance by default', () => {
      // expect(el.classes['solid-button']).toBe(true);
      // expect(el.nativeElement.classList.contains('solid-button')).toBe(true);
      expect(el.classList).toContain(BUTTON_CLASSES.solid);
    })
    it('should apply proper CSS classes when appearance changes', () => {
      component.appearance = 'stroked';
      fixture.detectChanges();
      expect(el.classList).toContain(BUTTON_CLASSES.stroked);
  
      component.appearance = 'solid';
      fixture.detectChanges();
      expect(el.classList).toContain(BUTTON_CLASSES.solid);
    })
  })
  describe('Loading state', () => {
    it('should show loader icon in "loading" state', () => {
      fixture.componentRef.setInput('loading', true)
      fixture.detectChanges();
      let loader = debugEl.query(By.css('[data-testingId="loader"]'));
      expect(loader).not.toBeNull();
  
      fixture.componentRef.setInput('loading', false)
      fixture.detectChanges();
      loader = debugEl.query(By.css('[data-testingId="loader"]'));
      expect(loader).toBeNull();
    })
  })
  describe('Disabled state', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('disabled', true);
      fixture.detectChanges();
    })
    it('should apply nessesary attributes to component host', () => {
      expect(el.classList).toContain('disabled');
      expect(el.getAttribute('disabled')).not.toBeNull();
      expect(el.getAttribute('tabindex')).toBe('-1');
    })
    it('should prevent default behavior', () => {
      const clickEvent = new PointerEvent('click', {
        cancelable: true
      })
      debugEl.triggerEventHandler('click', clickEvent);
      expect(clickEvent.defaultPrevented).toBe(true);
    })
  })
})