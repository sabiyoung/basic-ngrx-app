import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../interfaces/user.model';

export const userFeatureKey = 'user';

export interface State {
  users: User[];
}

export const initialState: State = {
  users: [{id: 1, name: 'saba', email: 'saba@gmail.com'}],
};

export const reducer = createReducer(
  initialState,

);
