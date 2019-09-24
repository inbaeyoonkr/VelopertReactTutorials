import { createAction, handleActions } from 'redux-actions';
// 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 객체 생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 리듀서 함수 만들기
const initialState = {
  number: 0
};

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 })
  },
  initialState
);

export default counter;
