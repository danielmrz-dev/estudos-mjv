import { TestBed } from "@angular/core/testing"
import { ItemCardComponent } from "./item-card.component"
import { ItemCardModule } from "./item-card.module";

describe('ItemCardComponent', () => {
  it('...', () => {
    const {fixture} = setup();
    
  })
})

function setup() {
  TestBed.configureTestingModule({
    imports: [ItemCardModule]
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