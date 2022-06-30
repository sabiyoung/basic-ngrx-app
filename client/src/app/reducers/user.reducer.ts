import { Action, createReducer, on } from '@ngrx/store';
import { actionAddUser } from '../actions/user.actions';
import { User } from '../interfaces/user.model';
import { actionSelectUserId } from './../actions/user.actions';

export const userFeatureKey = 'user';

export interface State {
  users: User[];
  selectedId: number | null;
}

export const initialState: State = {
  users: [],
  selectedId: null
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
    }),
    on(actionSelectUserId,(
      state, action
    ) => {
      return {
        ...state,
        selectedId: action.id
      }
    })
);
