import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUsers from '../reducers/user.reducer';

const getUsersFeature = createFeatureSelector<fromUsers.State>(fromUsers.userFeatureKey);

export const selectUsers = createSelector(
  getUsersFeature,
  (state) => state.users
);
