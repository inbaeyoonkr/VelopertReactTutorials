import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { changeInput, toggle, insert, remove } from '../modules/todos';

const TodosContainer = () => {
  const { todos, input } = useSelector(({ todos }) => ({
    todos: todos.todos,
    input: todos.input
  }));
  const dispatch = useDispatch();
  const onChangeInput = useCallback(input => dispatch(changeInput(input)), [
    dispatch
  ]);
  const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
  const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
  const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

  return (
    <Todos
      todos={todos}
      input={input}
      onChangeInput={onChangeInput}
      onToggle={onToggle}
      onInsert={onInsert}
      onRemove={onRemove}
    />
  );
};
export default TodosContainer;
