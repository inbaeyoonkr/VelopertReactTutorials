import React from 'react';
import styled from 'styled-components';

const Template = styled.div`
  width: 512px;
  /* width가 주어진 상태에서 좌우 중앙 정렬 */
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;

const Title = styled.div`
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: white;
`;

const TodoTemplate = ({ children }) => {
  return (
    <Template>
      <Title>일정 관리</Title>
      <Content>{children}</Content>
    </Template>
  );
};

export default TodoTemplate;
