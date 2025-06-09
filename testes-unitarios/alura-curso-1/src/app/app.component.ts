import { Component } from '@angular/core';
import { LikeWidgetComponent } from "./shared/components/like-widget/like-widget.component";

@Component({
  selector: 'app-root',
  imports: [LikeWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  likes: number = 0;

  like() {
    this.likes++;
  }
}
