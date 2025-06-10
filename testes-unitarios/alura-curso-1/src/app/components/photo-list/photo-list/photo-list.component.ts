import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPhoto } from '../../../shared/interfaces/photo.interface';
import { PhotoBoardService } from '../../../shared/services/photo-board.service';
import { PhotoBoardComponent } from '../../../shared/components/photo-board/photo-board.component';
import { CommonModule } from '@angular/common';
import { faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-photo-list',
  imports: [PhotoBoardComponent, CommonModule, FontAwesomeModule],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.scss'
})
export class PhotoListComponent implements OnInit {
  photos$!: Observable<IPhoto[]>;
  fa = { faSpinner };

  constructor(private readonly photoBoardService: PhotoBoardService) { }

  ngOnInit(): void {
    this.photos$ = this.photoBoardService.getPhotos();
  }
}
