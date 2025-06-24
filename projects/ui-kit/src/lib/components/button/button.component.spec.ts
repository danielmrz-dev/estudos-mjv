import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ButtonComponent, BUTTON_CLASSES } from "./button.component";
import { ButtonModule } from "./button.module";
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

fdescribe(ButtonComponent.name, () => {
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


  
})