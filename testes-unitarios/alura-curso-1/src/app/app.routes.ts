import { Routes } from '@angular/router';
import { PhotoListComponent } from './components/photo-list/photo-list/photo-list.component';

export const routes: Routes = [
    { path: 'photos', component: PhotoListComponent },
    { path: '**', redirectTo: '/photos', pathMatch: 'full' }
];
