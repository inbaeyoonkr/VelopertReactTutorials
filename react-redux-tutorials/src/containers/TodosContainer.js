import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { changeInput, toggle, insert, remove } from '../modules/todos';
import { useActions } from '../lib/useActions';

const TodosContainer = () => {
  const { todos, input } = useSelector(({ todos }) => ({
    todos: todos.todos,
    input: todos.input
  }));

  const [onChangeInput, onToggle, onInsert, onRemove] = useActions(
    [changeInput, toggle, insert, remove],
    []
  );
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
export default React.memo(TodosContainer);
