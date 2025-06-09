import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionDirective } from './action.directive';
import { Component } from '@angular/core';

describe(ActionDirective.name, () => {

  let component: DummyComponent;
  let fixture: ComponentFixture<DummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new ActionDirective();
    expect(directive).toBeTruthy();
  });

  it('(DOM) (@Output appAction) should emit event with payload when Enter key is pressed', () => {
    const element: HTMLElement = fixture.nativeElement.querySelector('.dummy');
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    element.dispatchEvent(event);
    expect(component.hasEvent()).toBe(true);
  });

  it('(DOM) (@Output appAction) should emit event with payload when clicked', () => {
    const element: HTMLElement = fixture.nativeElement.querySelector('.dummy');
    const event = new MouseEvent('click');
    element.dispatchEvent(event);
    expect(component.hasEvent()).toBe(true);
  });
  
});

@Component({
  standalone: true,
  template: `
    <div class="dummy" (appAction)="actionHandler($event)"></div>
  `,
  imports: [ActionDirective]
})
class DummyComponent {

  private event: Event | null = null;

  actionHandler(event: Event): void {
    this.event = event;
  }

  hasEvent(): boolean {
    return !!this.event; 
  }
}
