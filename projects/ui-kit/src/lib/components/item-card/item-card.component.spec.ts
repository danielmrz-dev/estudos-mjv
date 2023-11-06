import { TestBed } from "@angular/core/testing"
import { ItemCardComponent } from "./item-card.component"
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";
import { ButtonComponent } from "../button/button.component";

describe('ItemCardComponent', () => {
  it('...', () => {
    const {fixture} = setup();
    console.log(
      'card button',
      fixture.debugElement.query(By.directive(ButtonComponent))
    );
    
    debugger;
  })
})

function setup() {
  TestBed.configureTestingModule({
    declarations: [ItemCardComponent, ButtonComponent],
    schemas: [NO_ERRORS_SCHEMA]
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