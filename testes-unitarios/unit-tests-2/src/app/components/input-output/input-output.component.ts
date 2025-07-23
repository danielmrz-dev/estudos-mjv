import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-output',
  imports: [RouterLink, CommonModule],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.scss',
  standalone: true
})
export class InputOutputComponent implements OnInit {
  @Input({ required: true }) total: number = 0;
  @Input({ required: true }) limit: number = 20;
  @Input({ required: true }) currentPage: number = 1;

  @Output('pageChange') $pageChangeEvent = new EventEmitter<number>();

  pagesCount: number = 1;
  pages: number[] = [];

  constructor(private readonly utils: UtilsService) {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit);
    this.pages = this.pagesCount > 0 
      ? this.utils.range(1, this.pagesCount + 1)
      : [];
  }

  selectPage(page: number) {
    this.$pageChangeEvent.emit(page);
  }
}
