import { TestBed } from "@angular/core/testing"
import { ItemCardComponent } from "./item-card.component"
import { Component, Input, NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";
import { ButtonComponent } from "../button/button.component";
import { ChipComponent } from "../chip/chip.component";

describe('ItemCardComponent', () => {
  it('...', () => {
    const {fixture} = setup();
    console.log(
      'chips: ',
      fixture.debugElement.queryAll(By.directive(ChipComponent))
    );
    
    debugger;
  })
})

function setup() {
  @Component({
    selector: 'df-chip',
    template: `
      <span data-testingId="chip-text" class="chip-text">
        <ng-content></ng-content>
      </span>
    `,
    providers: [
      {
        provide: ChipComponent,
        useExisting: ChipComponentStub
      }
    ]
  })
  class ChipComponentStub implements Partial<ChipComponent<unknown>> {
    @Input() value?: unknown;
  }
  
  TestBed.configureTestingModule({
    declarations: [ItemCardComponent, ChipComponentStub, ButtonComponent],
  });
  const fixture = TestBed.createComponent(ItemCardComponent);
  fixture.componentInstance.item = {
    id: 0,
    name: 'Angular Testing Course',
    imageURL: '',
    price: 99
  }
  fixture.componentInstance.tags = ['Angular Testing'];
  fixture.detectChanges();
  return { fixture }
}