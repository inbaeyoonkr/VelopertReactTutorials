import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

const TodoInsertBlock = styled.div`
  form {
    display: flex;
    background: #495057;
  }

  input {
    /* 기본 스타일 초기화 */
    background: none;
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;
    &::placeholder {
      color: #dee2e6;
    }
    /* 버튼을 제외한 영역을 모두 차지하기 */
    flex: 1;
  }
  button {
    background: none;
    border: none;
    outline: none;
    background: #868e96;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
      background: #adb5bd;
    }
  }
`;

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  // 컴포넌트가 리렌더링될 때마다 함수를 새로 만드는 것이 아니고, 한 번 함수를 만들고 재사용하기 위해서 useCallback 사용
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <TodoInsertBlock>
      <form onSubmit={onSubmit}>
        <input
          placeholder="할 일을 입력하세요"
          onChange={onChange}
          value={value}
        />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
    </TodoInsertBlock>
  );
};

export default TodoInsert;
