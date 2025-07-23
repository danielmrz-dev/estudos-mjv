import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageComponent } from './error-message.component';
import { By } from '@angular/platform-browser';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render default message', () => {
    const element = fixture.debugElement.query(By.css('[data-testId="title"]'));
    expect(element.nativeElement.textContent.trim()).toBe('Something went wrong');
  });

  it('should render custom message', () => {
    const customMessage = 'Email already taken.'
    component.message = customMessage;
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('[data-testId="title"]'));
    expect(element.nativeElement.textContent.trim()).toBe(customMessage);
  });
  
  
});
