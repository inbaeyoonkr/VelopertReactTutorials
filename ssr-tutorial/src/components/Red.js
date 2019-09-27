import React from 'react';
import styled from 'styled-components';

const RedBlock = styled.div`
  background: red;
  font-size: 1.5rem;
  color: white;
  width: 128px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Red = () => {
  return <RedBlock>Red</RedBlock>;
};

export default Red;
