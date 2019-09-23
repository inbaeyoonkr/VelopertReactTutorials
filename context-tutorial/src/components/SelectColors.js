import React, { useContext } from 'react';
import ColorContext from '../context/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

export default class SelectColors extends React.Component {
  static contextType = ColorContext;

  handleColor = color => {
    this.context.actions.setColor(color);
  };

  handleSubcolor = subcolor => {
    this.context.actions.setSubcolor(subcolor);
  };

  render() {
    return (
      <div>
        <h2> 색상을 선택하세요</h2>
        <div style={{ display: 'flex' }}>
          {colors.map(color => (
            <div
              style={{
                background: color,
                width: '24px',
                height: '24px',
                cursor: 'pointer'
              }}
              onClick={() => this.handleColor(color)}
              onContextMenu={e => {
                e.preventDefault();
                this.handleSubcolor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}
