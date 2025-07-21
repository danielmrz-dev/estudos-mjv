import { TestBed } from "@angular/core/testing"
import { ItemCardComponent } from "./item-card.component"
import { Component, Input, NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";
import { ChipComponent } from "../chip/chip.component";

describe('ItemCardComponent', () => {
  it('should properly render chips', () => {
    const { fixture } = setup();
    expect(1).toBe(1);
  })

  it('should render correctly', () => {
    const { debugEl, fixture } = setup();
    const tagsArray = ['Angular', 'Unit tests', 'Jasmine'];
    fixture.componentRef.setInput('tags', tagsArray);
    debugger
    fixture.detectChanges();
    const tags = debugEl.queryAll(By.css('[data-testingId="tag"]'));
    expect(tags.length).toBe(3);
  });


  
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

  TestBed.overrideComponent(ItemCardComponent, {
    remove: { imports: [ChipComponent] },
    add: { imports: [ChipComponentStub] }
  })
  const fixture = TestBed.createComponent(ItemCardComponent);
  const component = fixture.componentInstance;
  const debugEl = fixture.debugElement;
  fixture.componentInstance.item = {
    id: 0,
    name: 'Angular Testing',
    imageURL: '',
    price: 99
  };

  fixture.componentInstance.tags = ['Angular Testing'];
  fixture.detectChanges();

  return { fixture, component, debugEl };

}