import React, { useState } from 'react';
import loadable from '@loadable/component';
import './App.css';
import logo from './logo.svg';

// 코드 스플리팅할 컴포넌트 가져오자
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>Loading ...</div>
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(!visible);
  };

  const onMouseOver = () => {
    SplitMe.preload();
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
