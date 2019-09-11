import React from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

const InsertForm = styled.form`
  display: flex;
  background: #495057;
`;

const InsertInput = styled.input`
  /* 기본 스타일 초기화 */
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;

  &::placeholder {
    color: #dee2e6;
  }
  /* 버튼을 제외한 영역을 모두 차지하기 */
  flex: 1;
`;

const InsertButton = styled.button`
  /* 기본 스타일 초기화 */
  background: none;
  outline: none;
  border: none;
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
`;

const TodoInsert = () => {
  return (
    <InsertForm>
      <InsertInput placeholder="할 일을 입력하세요" />
      <InsertButton type="submit">
        <MdAdd />
      </InsertButton>
    </InsertForm>
  );
};

export default TodoInsert;
