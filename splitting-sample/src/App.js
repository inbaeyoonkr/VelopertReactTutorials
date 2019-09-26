import React, { useState, Suspense } from 'react';
import './App.css';
import logo from './logo.svg';

// 코드 스플리팅할 컴포넌트 가져오자
const SplitMe = React.lazy(() => import('./SplitMe'));

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(!visible);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p onClick={onClick}>Hello React</p>
        {visible && (
          <Suspense fallback={<div>Loading ...</div>}>
            <SplitMe />
          </Suspense>
        )}
      </header>
    </div>
  );
}

export default App;
