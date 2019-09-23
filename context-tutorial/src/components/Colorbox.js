import React from 'react';
import ColorContext from '../context/color';

const Colorbox = () => {
  return (
    <ColorContext.Consumer>
      {value => (
        <div
          style={{ width: '64px', height: '64px', background: value.color }}
        />
      )}
    </ColorContext.Consumer>
  );
};

export default Colorbox;
