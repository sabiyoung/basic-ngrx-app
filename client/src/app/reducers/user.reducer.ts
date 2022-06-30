import { Action, createReducer, on } from '@ngrx/store';
import { actionAddUser } from '../actions/user.actions';
import { User } from '../interfaces/user.model';

export const userFeatureKey = 'user';

export interface State {
  users: User[];
}

export const initialState: State = {
  users: [],
};

export const reducer = createReducer(
  initialState,
  on(
    actionAddUser,
    (state, action) => {
      return {
        ...state,
        users: [...state.users, action.user],
      }
    })
);
