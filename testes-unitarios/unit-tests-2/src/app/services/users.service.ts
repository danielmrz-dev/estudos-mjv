import { inject, Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { BehaviorSubject } from 'rxjs';

export interface IUser {
  id: number,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  utilsService = inject(UtilsService);
  users$ = new BehaviorSubject<IUser[]>([]);

  addUser(user: IUser): void {
    this.users$.next([...this.users$.getValue(), user]);
  }

  removeUser(userId: number): void {
    const updatedUsers = this.users$.getValue().filter((user) => user.id !== userId);
    this.users$.next(updatedUsers);
  }
}
