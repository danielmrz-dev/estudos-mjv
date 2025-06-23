import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appAction]',
  standalone: true
})
export class ActionDirective {

  @Output() appAction = new EventEmitter<Event>();

  @HostListener('click', ['$event'])
  handleClick(event: Event): void {
    this.appAction.emit(event);
  }
  
  @HostListener('keyup.enter', ['$event'])
  handleKeyUp(event: KeyboardEvent): void {
    this.appAction.emit(event);
  }

}
