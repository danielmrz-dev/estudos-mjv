import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputComponent } from './input-output.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('InputOutputComponent', () => {
  let component: InputOutputComponent;
  let fixture: ComponentFixture<InputOutputComponent>;
  let debugEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        InputOutputComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InputOutputComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    component.total = 50;
    component.limit = 10;
    component.currentPage = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test', () => {
    const pagesContainer = debugEl.queryAll(By.css('[data-testId="page-container"]'));
    expect(pagesContainer.length).toBe(5);
    expect(pagesContainer[0].nativeElement.textContent.trim()).toBe('1');
  });

  it('Output', () => {
    const spy = spyOn(component.$pageChangeEvent, 'emit');
    const element = debugEl.queryAll(By.css('[data-testId="page-container"]'));
    element[0].triggerEventHandler('click');
    expect(spy).toHaveBeenCalledWith(1);
  });
  
  
});
