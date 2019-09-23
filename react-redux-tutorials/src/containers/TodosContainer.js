import React from 'react';
import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { changeInput, toggle, insert, remove } from '../modules/todos';

const TodosContainer = ({
  input,
  todos,
  changeInput,
  toggle,
  remove,
  insert
}) => {
  return (
    <Todos
      todos={todos}
      input={input}
      onChangeInput={changeInput}
      onToggle={toggle}
      onRemove={remove}
      onInsert={insert}
    />
  );
};

export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos
  }),
  {
    changeInput,
    toggle,
    insert,
    remove
  }
)(TodosContainer);
