import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PhotoFrameComponent } from './photo-frame.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe(PhotoFrameComponent.name, () => {
  let prot = PhotoFrameComponent.prototype;
  let component: PhotoFrameComponent;
  let fixture: ComponentFixture<PhotoFrameComponent>;
  let debugEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${prot.like.name}() should trigger (@Output liked) only ONCE when called multiple times within debounce time`, fakeAsync(() => {
    let times = 0;
    component.liked.subscribe(() => times++)
    component.like();      
    tick(500);
    component.like();      
    tick(500);
    expect(times).toBe(2);
  }));

  it(`${prot.like.name}() should trigger (@Output liked) TWICE when called outside debounce time`, fakeAsync(() => {
    let times = 0;
    component.liked.subscribe(() => times++)
    component.like();      
    tick(500);
    component.like();      
    tick(500);
    expect(times).toBe(2);
  }));
  
  it(`(DOM) Should display number of likes when (@Input likes) is incremented`, fakeAsync(() => {
    component.likes++;
    fixture.detectChanges();
    const element = debugEl.query(By.css('.like-counter'));
    expect(element.nativeElement.textContent.trim()).toBe('1');
  }));

  it('(DOM) Should update aria-label when (@Input likes) is incremented', () => {
    component.likes++;
    fixture.detectChanges();
    const element = debugEl.query(By.css('span'));
    expect(element.attributes['aria-label']).toBe('1: people liked');
  });

  it('(DOM) Should set initial value to aria-label property (@Input likes)', () => {
    const element = debugEl.query(By.css('span'));
    expect(element.attributes['aria-label']).toBe('0: people liked');
  });
  
  it(`(DOM) should diplay image with src and description when bound to properties`, () => {
    const description = 'Description';
    const src = 'https://some-site.com/img.jpeg';
    component.src = src;
    component.description = description;
    fixture.detectChanges();
    const img = debugEl.query(By.css('img'));
    expect(img.attributes['src']).toBe(src);
    expect(img.attributes['alt']).toBe(description);
  });
});
