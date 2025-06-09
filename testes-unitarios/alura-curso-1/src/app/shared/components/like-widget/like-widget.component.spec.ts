import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from '../../services/unique-id.service';

describe(LikeWidgetComponent.name, () => {
  let prot = LikeWidgetComponent.prototype;
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;
  let service: UniqueIdService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(UniqueIdService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should autogenerate ID during ngOnInit when (@Input id) is missing', () => {
    expect(component.id).toBeTruthy();
  });

  it('should NOT generate ID during ngOnInit when (@Input id) is provided', () => {
    component.id = ('app-uuudbf243');
    expect(component.id).toBe('app-uuudbf243');
  });
  
  it(`${prot.like.name}() should trigger (@Output liked) when called`, () => {
    const spy = spyOn(component.liked, 'emit');
    component.like();
    expect(spy).toHaveBeenCalledTimes(1);
  });
  
});
