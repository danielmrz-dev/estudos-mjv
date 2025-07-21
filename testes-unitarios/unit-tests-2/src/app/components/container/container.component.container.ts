import { Component } from '@angular/core';
import { ContainerComponent } from './container.component';

@Component({
  selector: 'app-container-container',
  imports: [ContainerComponent],
  template: `
    <app-container
      [title]="title"
    />
  `,
  styles: [ ':host { display: block }' ]
})
export class ContainerComponentContainer {
  title: string = 'Este é o título!';
}
