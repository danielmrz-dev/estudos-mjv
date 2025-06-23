import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from '../../services/unique-id.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe(LikeWidgetComponent.name, () => {
  let prot = LikeWidgetComponent.prototype;
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;
  let debugEl: DebugElement;
  let service: UniqueIdService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
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
    component.id = 'app-uuudbf243';
    expect(component.id).toBe('app-uuudbf243');
  });
  
  it(`${prot.like.name}() should trigger (@Output liked) when called`, () => {
    const spy = spyOn(component.liked, 'emit');
    component.like();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('(DOM) should display number of likes when clicked', () => {
    component.liked.subscribe(() => {
      component.likes++;
      fixture.detectChanges();
      const counterEl = debugEl.query(By.css('.like-counter'));
      expect(counterEl.nativeElement.textContent.trim()).toBe('1');
    })

    const likeWidgetContainer = debugEl.query(By.css('.like-widget-container'));
    likeWidgetContainer.triggerEventHandler('click');
  });

  it('(DOM) should display number of likes when is focused and key enter is pressed', (done: DoneFn) => {
    component.liked.subscribe(() => {
      component.likes++;
      fixture.detectChanges();
      const counterEl = debugEl.query(By.css('.like-counter'));
      expect(counterEl.nativeElement.textContent.trim()).toBe('1');
      done();
    })

    const likeWidgetContainer: HTMLElement = debugEl.nativeElement.querySelector('.like-widget-container');
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    likeWidgetContainer.dispatchEvent(event);
  });
  
  
});
