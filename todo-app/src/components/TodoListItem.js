import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';

const TodoListItemBlock = styled.div`
  & + & {
    border-top: 1px solid #dee2e6;
  }
  &:nth-child(even) {
    background: #f8f9fa;
  }
  .TodoListItem {
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
  }
`;

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;
  return (
    <TodoListItemBlock style={style}>
      <div className="TodoListItem">
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </TodoListItemBlock>
  );
};

// 자신의 props가 바뀌었을 때만 리렌더링하기 위해서다.
// 성능 최적화
export default React.memo(
  TodoListItem,
  (prevProps, nextProps) => prevProps.todo === nextProps.todo,
);
