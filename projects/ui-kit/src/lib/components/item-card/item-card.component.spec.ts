import { TestBed } from "@angular/core/testing"
import { ItemCardComponent } from "./item-card.component"
import { Component, Input, NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";
import { ButtonComponent } from "../button/button.component";
import { ChipComponent } from "../chip/chip.component";
import { ButtonModule } from "ui-kit";

fdescribe('ItemCardComponent', () => {
  it('should properly render chips', () => {
    const { fixture } = setup();
    console.log(fixture.debugElement.query(By.directive(ChipComponent)));    
    debugger;
    expect(1).toBe(1);
  })
})

function setup() {

  @Component({
    selector: 'df-chip',
    standalone: true,
    template: `
      <span data-testingId="chip-text" class="chip-text">
        <ng-content></ng-content>
      </span>
    `,
  })
  class ChipComponentStub implements Partial<ChipComponent<unknown>> {
    @Input() value?: unknown;
  }

  TestBed.configureTestingModule({
    providers: [
      {
        provide: ChipComponent,
        useClass: ChipComponentStub
      }
    ]
  })
  const fixture = TestBed.createComponent(ItemCardComponent);
  fixture.componentInstance.item = {
    id: 0,
    name: 'Angular Testing',
    imageURL: '',
    price: 99
  };

  fixture.componentInstance.tags = ['Angular Testing'];
  fixture.detectChanges();

  return { fixture };

}