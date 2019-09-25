import { startLoading, finishLoading } from '../modules/loading';

export default function createRequestChunk(type, request) {
  // 성공 및 실패 액션 타입을 정의해주자
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return params => async dispatch => {
    dispatch({ type }); // 요청을 시작한 것을 알림
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data
      }); // 요청 성공
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true
      }); // 에러 발생
      dispatch(finishLoading(type));
      throw e;
    }
  };
}

// 사용법 : createRequestChunk('GET_USERS', api.getUsers)
