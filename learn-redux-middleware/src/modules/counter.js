import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'modules/INCREASE';
const DECREASE = 'modules/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = 0;
