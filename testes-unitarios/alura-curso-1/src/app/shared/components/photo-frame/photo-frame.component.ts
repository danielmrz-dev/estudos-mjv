import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { LikeWidgetComponent } from "../like-widget/like-widget.component";
import { debounceTime, pipe, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-photo-frame',
  imports: [LikeWidgetComponent],
  templateUrl: './photo-frame.component.html',
  styleUrl: './photo-frame.component.scss'
})
export class PhotoFrameComponent implements OnInit, OnDestroy {
  
  @Output() liked = new EventEmitter<void>();

  @Input() description: string = '';
  @Input() src: string = '';
  @Input() likes: number = 0;
  private debounceSub = new Subject();
  private unSub = new Subject();

  ngOnInit(): void {
    this.debounceSub.asObservable().pipe(
      debounceTime(500),
      
    ).pipe(takeUntil(this.unSub))    
    .subscribe(() => {
      this.liked.emit();
    })
  }

  ngOnDestroy(): void {
    this.unSub.next(null);
    this.unSub.complete();
  }

  like(): void {
    this.debounceSub.next(null);
  }
}
