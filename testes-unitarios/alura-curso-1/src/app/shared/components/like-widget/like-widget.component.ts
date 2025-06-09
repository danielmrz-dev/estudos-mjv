import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { UniqueIdService } from '../../services/unique-id.service';
import { ActionDirective } from '../../directives/action.directive';

@Component({
  selector: 'app-like-widget',
  imports: [FontAwesomeModule, ActionDirective],
  templateUrl: './like-widget.component.html',
  styleUrl: './like-widget.component.scss'
})
export class LikeWidgetComponent implements OnInit {

  @Input({ required: true }) public likes = 0;
  @Input() public id = '';
  @Output() public liked = new EventEmitter<void>();
  public fonts = { faThumbsUp };

  constructor(private readonly uniqueIdService: UniqueIdService) {}

  ngOnInit(): void {
    this.id = this.id ? this.id : this.uniqueIdService.generateUniqueIdWithPrefix('like-widget');
  }

  public like(): void {
    this.liked.emit();
  }
}
