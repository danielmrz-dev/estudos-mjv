import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IPhoto } from '../../interfaces/photo.interface';
import { CommonModule } from '@angular/common';
import { PhotoFrameComponent } from "../photo-frame/photo-frame.component";

@Component({
  selector: 'app-photo-board',
  imports: [CommonModule, PhotoFrameComponent],
  templateUrl: './photo-board.component.html',
  styleUrl: './photo-board.component.scss'
})
export class PhotoBoardComponent implements OnChanges {

  @Input({ required: true }) photos!: IPhoto[] | null;
  rows: any[][] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['photos']) {
      this.rows = this.groupColumns(changes['photos'].currentValue);
    }
  }

  private groupColumns(photos: IPhoto[]): any[][] {
    const newRows = [];
    const step = 4;
    for (let i = 0; i < photos.length; i += step) {
      newRows.push(photos.slice(i, i + step));
    }

    return newRows;
  }
}
