import { createAction, props } from '@ngrx/store';
import { User } from '../interfaces/user.model';

export const loadUsers = createAction(
  '[User] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: any }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);
export const actionAddUser = createAction(
  '[Users] add User',
  props<{ user: User }>()
);
