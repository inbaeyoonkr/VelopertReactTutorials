import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';

const TodoListItemBlock = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  &:nth-child(even) {
    background: #f8f9fa;
  }

  .checkbox {
    cursor: pointer;
    flex: 1; /* 차지할 수 있는 영역 전부 차지 */
    display: flex;
    align-items: center;
    svg {
      font-size: 1.5rem;
    }
    .text {
      margin-left: 0.5rem;
      flex: 1;
    }
    /* 체크 되었을 때 보여줄 스타일  */
    &.checked {
      svg {
        color: #22b8cf;
      }
      .text {
        color: #adb5bd;
        text-decoration: line-through;
      }
    }
  }

  .remove {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    &:hover {
      color: #ff8787;
    }
  }

  /* 엘리먼트 사이사이에 테두리를 넣어 줌 */
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  return (
    <TodoListItemBlock>
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </TodoListItemBlock>
  );
};

export default React.memo(TodoListItem);
