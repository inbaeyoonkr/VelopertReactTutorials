import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const TOGGLE = 'todos/TOGGLE';
const INSERT = 'todos/INSERT';
const REMOVE = 'todos/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, input => input);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);
let id = 3;
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  done: false
}));

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '밥 먹기',
      done: false
    },
    {
      id: 2,
      text: '똥 싸기',
      done: false
    }
  ]
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, draft => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, draft => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, draft => {
        const todo = draft.todos.find(todo => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, draft => {
        const index = draft.todos.findIndex(todo => todo.id === id);
        draft.todos.splice(index, 1);
      })
  },
  initialState
);

export default todos;
