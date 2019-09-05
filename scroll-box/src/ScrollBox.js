import React, { Component } from 'react';

/** 자바스크립트 scrollbar 내릴 때 DOM 노드가 가지는 값 (내가 짠 코드 토대로)
 * scrollTop : 세로 스크롤바 위치 ( 0 ~ 350 )
 * scrollHeight : 스크롤이 있는 박스 안의 div 높이 ( 650 )
 * clientHeight : 스크롤이 있는 박스 높이 ( 300 )
 */

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative'
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, green)'
    };

    return (
      <div
        style={style}
        ref={ref => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
