import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ButtonComponent, BUTTON_CLASSES } from "./button.component";
import { ButtonModule } from "./button.module";
import { Component, DebugElement, Input } from "@angular/core";
import { By } from "@angular/platform-browser";

describe(ButtonComponent.name, () => {
  let fixture: ComponentFixture<ButtonComponent>;
  let component: ButtonComponent;
  let debugEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonModule]
    })
    
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should have "solid" appearance by default', () => {
    const classes = debugEl.nativeElement.classList;
    expect(classes.contains("solid-button")).toBe(true);
  });

  it('should change button appearance when classes are applied', () => {
    component.appearance = 'dashed';
    fixture.detectChanges();
    const classes = debugEl.nativeElement.classList;
    expect(classes.contains(BUTTON_CLASSES.dashed)).toBe(true);
    component.appearance = 'stroked';
    fixture.detectChanges();
    expect(classes.contains(BUTTON_CLASSES.stroked)).toBe(true);
  });

  it('should show loader when loading property is set to true', () => {
    fixture.componentRef.setInput('loading', true);
    fixture.detectChanges();
    let loader = debugEl.query(By.css('[data-testingId="loader"]'));
    expect(loader).not.toBeNull();
    fixture.componentRef.setInput('loading', false);
    fixture.detectChanges();
    loader = debugEl.query(By.css('[data-testingId="loader"]'));
    expect(loader).toBeNull();
  });

  describe('Disable state', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('disabled', true);
      fixture.detectChanges();      
    });
    
    it('should apply necessary attributes to component host', () => {
      expect(debugEl.nativeElement.classList).toContain('disabled');
      expect(debugEl.attributes['disabled']).not.toBeNull();
      expect(debugEl.attributes['tabindex']).toBe('-1');
    });

    it('should prevent default behaviour', () => {
      const clickEvent = new PointerEvent('click', { cancelable: true });
      debugEl.triggerEventHandler('click', clickEvent);
      expect(clickEvent.defaultPrevented).toBe(true);
    });
  });
  
})

describe(`${ButtonComponent.name} (with TestHost)`, () => {
  it('should have "solid" appearance by default', () => {
    const { element } = setup();
    expect(element.classList).toContain(BUTTON_CLASSES.solid);
  });
  
  it('should show loader when loading property is set to true', () => {
    const { hostComponent, fixture, debugEl } = setup();
    hostComponent.loading = true;
    fixture.detectChanges();
    let loader = debugEl.query(By.css('[data-testingId="loader"]'));
    expect(loader).not.toBeNull();
    hostComponent.loading = false;
    fixture.detectChanges();
    loader = debugEl.query(By.css('[data-testingId="loader"]'));
    expect(loader).toBeNull();
  });
  
  it('should properly project content', () => {
    const { debugEl } = setup();
    const label = debugEl.query(By.css('[data-testingId="label"]'));
    expect(label.nativeElement.innerText).toBe('Test Host');
  });
  
});

function setup() {
  @Component({
    template: `<button [loading]="loading" dfButton>Test Host</button>`
  })
  class ButtonTestHost {
    @Input({ required: true }) loading = false;
  }

  TestBed.configureTestingModule({
    declarations: [
      ButtonTestHost
    ],
    imports: [
      ButtonModule
    ]
  })
  let fixture = TestBed.createComponent(ButtonTestHost);
  let debugEl = fixture.debugElement.query(By.directive(ButtonComponent));
  let element: HTMLElement = debugEl.nativeElement;
  let hostComponent = fixture.componentInstance;
  fixture.detectChanges();

  return { fixture, debugEl, element, hostComponent };
}
