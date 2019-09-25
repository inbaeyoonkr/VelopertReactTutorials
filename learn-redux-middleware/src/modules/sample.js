import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestChunk from '../lib/createRequestChunk';

// 액션 타입을 선언한다.
// 한 요청당 세 개를 만들어야 한다.
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

// thunk 함수를 생성한다.
// thunk 함수 내부에서는 시작했을 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치한다.
export const getPost = createRequestChunk(GET_POST, api.getPost);
export const getUsers = createRequestChunk(GET_USERS, api.getUsers);

// 초기 상태를 설정
const initialState = {
  post: null,
  users: null
};

// handleActions
// 각 액션에 대한 상태 갱신을 하자.
const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload
    })
  },
  initialState
);

export default sample;
