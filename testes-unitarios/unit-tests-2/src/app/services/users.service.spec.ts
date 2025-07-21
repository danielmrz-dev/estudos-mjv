import { TestBed } from '@angular/core/testing';

import { IUser, UsersService } from './users.service';
import { UtilsService } from './utils.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        // { provide: UtilsService, useValue: utilsServiceMock }
      ]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addUser', () => {
    it('should add an user', () => {
      const user: IUser = { id: 4, name: 'Daniel' };
      service.addUser(user);
      expect(service.users$.getValue()).toEqual([{ id: 4, name: 'Daniel' }]);
    });
  });

  describe('removeUser', () => {
    it('should remove an user', () => {
      service.users$.next([{ id: 3, name: 'foo' }]);
      service.removeUser(3);
      expect(service.users$.getValue()).toEqual([]);
    });
  });

});
